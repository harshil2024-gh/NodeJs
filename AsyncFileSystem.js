//Asynchronours file system.
var fs=require("fs");
// fs.writeFile("a.txt","hello",(err)=>
//     {
//         if(err)
//             {
//                 console.error(err);
//             }
//         else
//         {
//             console.log("Written");
//         }
//     }) //It has 3 parameter filname,content,callback function.
//     console.log("completed")

fs.appendFile("a.txt","\nAsync File System",(err)=>
    {
        if(err)
            {
                console.error(err);
            }
        else
        {
            console.log("Written");
        }
    }) //It has 3 parameter filname,content,callback function.
    console.log("completed")
    