
const {readFile,writeFile}=require('fs');
let emp=[
    {id:1,name:'Kavin'},
    {id:2,name:'sai'},
    {id:3,name:'sita'},
    {id:4,name:'ram'},
    {id:5,name:'goutham'}
];
writeFile('emp.json',JSON.stringify(emp),'utf-8',(err,data)=>{
    if(err)throw err;
});
readFile('emp.json','utf-8',(err,data)=>{
    if(err)throw err;
    let empjson=JSON.parse(data);
    console.log(empjson);
});