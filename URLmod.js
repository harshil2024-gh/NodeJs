var url=require("url");
var addr="http://localhost:8080/test/about.html?year=2025&month=march#staff";
// var p=url.parse(addr);
// console.log(p);

var p2=url.parse(addr,true);
// console.log(p2);

if((p2.query.year % 4 == 0 && p2.query.year % 100 != 0) || (p2.query.year % 400 == 0))
    {
        console.log("Leap year!!")
    }
    else
    {
    console.log(" Not Leap year!!")

}    