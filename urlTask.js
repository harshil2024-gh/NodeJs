var url=require("url");
var fs=require("fs");
var addr="http://localhost:8080/test/about.html?year=2025&month=march#staff";
var p=url.parse(addr,true);
var content=JSON.stringify(p.query);
// fs.writeFile("a.txt",content,(e)=>{
//     if(e)
//     {console.log(e)}
//     else{console.log("Written")}
//      })
fs.readFile("a.txt","utf-8",(e,data)=>{
        if(e)
        {console.log(e)}
        else{
            var p1=JSON.parse(data);
            console.log(p1.year)
            }
         })