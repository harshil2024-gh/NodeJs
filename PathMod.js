var pm=require("path");
var addr="D:/lju/abc/test/a.txt";
var dn=pm.dirname(addr);
console.log(dn);
var en=pm.extname(addr);
console.log(en);
var bn=pm.basename(addr);
console.log(bn);
var p=pm.parse(addr);
console.log(p)