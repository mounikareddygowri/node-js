const express=require('express');
const code=require('qrcode');

const app=express();
const port=5000
app.get('/qrcode',(req,res)=>
{
    const url='https://aits.com';
    code.toDataURL(url,(err,qrCodeUrl)=>{
        if(err){
            res.status(500).send(`Internal server error`);
        }
        else{
            res.send(`
                <!DOCTYPE HTML>
                <html>
                    <head>
                        <title>QRCode Generator</title>
                    </head>
                    <body>
                         <h1>QRCode Generator</h1>
                         <img src="${qrCodeUrl}" alt="QR Code">
                         <p>Scan the QR code to visit website</p>
                    </body>
                </html>
            `)
        }
    });
});
app.listen(port,()=>
{
    console.log(`server is running on the port ${port}`);
});