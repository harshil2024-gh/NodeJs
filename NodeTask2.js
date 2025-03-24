var fs=require("fs");
const data={"d":{"a":10,"b":20,"c":[30,10]}};
fs.writeFileSync("s2.txt",JSON.stringify(data))
d1=fs.readFileSync("s2.txt","utf-8");
d2=JSON.parse(d1);
sum=d2.d.a+d2.d.b;
sub=Math.abs(d2.d.c[1]-d2.d.b)
mul=d2.d.c[0]*d2.d.c[1]
fs.appendFileSync("s2.txt","\nsum="+sum+"\nsub="+sub+"\nmul="+mul)