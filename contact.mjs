import { getStore } from "@netlify/blobs";

const headers = {
  "Content-Type": "application/json",
  "Cache-Control": "no-store",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
};

export default async (req) => {
  if (req.method === "OPTIONS") return new Response("", { status: 204, headers });
  const store = getStore("whatsapp-contact");
  if (req.method === "GET") {
    const data = await store.get("destination", { type: "json" });
    return new Response(JSON.stringify(data || { number: "918502826859", message: "" }), { status: 200, headers });
  }
  if (req.method !== "POST") return new Response(JSON.stringify({ error: "Method not allowed" }), { status: 405, headers });
  const expected = process.env.ADMIN_PASSWORD;
  const auth = req.headers.get("authorization") || "";
  if (!expected || auth !== `Bearer ${expected}`) {
    return new Response(JSON.stringify({ error: "Incorrect admin password or ADMIN_PASSWORD is not configured." }), { status: 401, headers });
  }
  let data;
  try { data = await req.json(); } catch {
    return new Response(JSON.stringify({ error: "Invalid request." }), { status: 400, headers });
  }
  const number = String(data.number || "").replace(/\D/g, "");
  const message = String(data.message || "").slice(0, 500);
  if (!/^[1-9]\d{7,14}$/.test(number)) {
    return new Response(JSON.stringify({ error: "Enter a valid international number with country code, digits only." }), { status: 400, headers });
  }
  await store.setJSON("destination", { number, message });
  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
};