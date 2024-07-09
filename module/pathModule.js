const {fileURLToPath}=require('url');
const path=require('path');
const {readFile,writeFile}=require('fs');

const _filename=__filename;
const __dirname1=path.dirname(_filename);
console.log(__dirname1);
readFile(path.join(__dirname1,'customers.json'),'utf-8',(err,data)=>{
    if(err) throw err;
    let customers=JSON.parse(data);
    writeFile(path.join(__dirname1,'customers.json'),JSON.stringify(customers),'utf-8',(err,data)=>{
        if(err) throw err;
        console.log('Data written Successfully');
    });
});
