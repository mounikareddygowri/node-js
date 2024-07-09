const {readFileSync,writeFileSync}=require('fs');
let fileContent=readFileSync('./msg.txt','utf-8');
console.log(fileContent);
let newFile='${fileContent}';
writeFileSync('newFile.txt',newFile,'utf-8');
console.log('Data is written in a new file Successfully');