//File system module
const fs=require("fs")
// fs.mkdirSync("node");
// fs.writeFileSync("node/rw.txt","Hello");
// fs.appendFileSync("node/rw.txt","\nWelcome");
// data=fs.readFileSync("node/rw.txt","utf-8"); //Method 1
// console.log(data);
// data=fs.readFileSync("node/rw.txt");
// console.log()
// console.log(data.toString()); //Method 2
// fs.renameSync("node/rw.txt","node/test.txt"); //-->Rename file name.
// fs.unlinkSync("node/test.txt"); // Delete File 
// fs.appendFileSync("node/rw.txt","Test")
// fs.appendFileSync("node/num.txt","50 -1 99 100 60 71 0 -2")
// data=fs.readFileSync("node/num.txt");
// str_data=data.toString().split(" ").sort()
// console.log(str_data)

fs.appendFileSync("node/source.txt","This is content of source file.")
data=fs.readFileSync("node/source.txt","utf-8");
fs.appendFileSync("node/destination.txt",data+"\nHello students")
fs.unlinkSync("node/source.txt")
