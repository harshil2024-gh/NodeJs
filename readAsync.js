var fs=require("fs");
fs.readFile("a.txt","utf-8",(err,data)=>
    {
        if (err)
            {
                throw err;
            }
            else
            {
                console.log(data);
            }
    })
    fs.rename("a.txt","a1.txt",()=>{
        console.log("renamed");
    })
    // fs.unlink("a1.txt",err=>{
    //     if (err)
    //     {
    //         console.log(err);
    //     }
    //     else
    //     {
    //         console.log("deleted")
    //     }
    // })