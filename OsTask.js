var os=require("os");
var fs=require("fs");

fs.mkdirSync(os.tmpdir()+"/AA")
var fm=os.freemem();
var d=fm/1024/1024/1024; //In GB
if (d>1)
    {
        fs.writeFileSync(os.tmpdir()+"/AA/os.txt","Sufficient Memory")
    }
    else
    {
    fs.writeFileSync(os.tmpdir()+"/AA/os.txt","Insufficient Memory")
    }
