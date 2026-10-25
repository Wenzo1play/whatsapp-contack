WHATSAPP CONTACT — NETLIFY SETUP

Is project mein:
- index.html = public permanent contact page
- admin.html = number update karne ka admin page
- Netlify Function + Blobs = number ko server par save karta hai
- ADMIN_PASSWORD = admin save action ko protect karta hai

DEPLOY KARNE KE STEPS
1. ZIP extract karein.
2. Netlify account banayein/login karein: https://app.netlify.com/
3. Project ko GitHub repository mein upload karein.
4. Netlify mein Add new project > Import an existing project chunein, GitHub repo connect karein, phir Deploy karein.
5. Netlify dashboard > Site configuration / Environment variables mein ADMIN_PASSWORD naam ka variable banayein. Strong, unique password set karein. Is password ko public ya kisi ko share na karein.
6. Site ko redeploy karein.
7. Site URL par /admin.html kholein, ADMIN_PASSWORD enter karein, WhatsApp number country code ke saath digits-only format mein daalein (India example: 919876543210), phir Save number.
8. Main site URL khol kar OPEN WHATSAPP button test karein.

IMPORTANT
- Sirf public website deploy karne se admin feature kaam nahi karega jab tak Netlify Functions deploy na hon aur ADMIN_PASSWORD environment variable set na ho.
- Netlify ka default URL permanent reh sakta hai jab tak aap site ko delete/rename na karein. Site rename karne par URL badal sakta hai. Custom domain optional hai.
- Netlify free plan par usage limits hoti hain; limits hit hone par site pause ho sakti hai. Official pricing: https://www.netlify.com/pricing/
- Is package mein koi WhatsApp number pre-filled nahi hai. Aap admin page se baad mein add/change kar sakte hain.
