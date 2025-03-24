// Operating system.
var os=require("os")
// console.log(os.platform())
// console.log(os.tmpdir()) //returns location of temporary folder :-C:\Users\LJENG\AppData\Local\Temp
// console.log(os.hostname())
// console.log(os.arch())

var fm=os.freemem();
console.log(fm);
var d=fm/1024/1024/1024; //In GB
console.log(d);