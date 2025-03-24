// Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using side value and diameter value respectively. Write object as well as perimeter values of square and circle in shape.txt file.
var fs=require("fs");
const shape = 
    [
        {
            name: "circle",
            diameter: 8
        },
        {
            name: "square",
            side: 10
        }
    ] 
    var content=JSON.stringify(shape)
    fs.writeFile("shape.txt",content,(e)=>{
            if(e)
            {console.log(e)}
            else{console.log("Written")}
             })
fs.readFile("shape.txt","utf-8",(e,data)=>{
        if(e)
        {console.log(e)}
        else{
            var p1=JSON.parse(data);
            var cir=(2*3.14*p1[0]['diameter']/2)
            var sqr=(4*p1[1]['side'])
            console.log(cir,sqr)
            fs.appendFile("shape.txt","\nPerimeter of circle:-"+cir+"\nPerimeter of square:-"+sqr,(e)=>{
                if(e)
                {console.log(e)}
                else{console.log("Written!!")}
                 })
           
            }
         })