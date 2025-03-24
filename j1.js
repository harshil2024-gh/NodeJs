var a = {
    "name": "Test", //datatype of name-->String
    "age": 20,      //datatype of age-->Int
    "ispass": true,  //datatype of ispass-->Boolean
    "subject": { "FSD2": "NAS", "FCSP2": "TAT" }, //datatype of subject-->Object
    "Marks": [25, 23, 21],   //datatype of Marks-->array
    "test": null          //datatype of test-->Null
}
//undefined,date dtype are not allowed
console.log(a)
console.log(a.name) //or console.log(a.['name'])
console.log(a.subject.FCSP2)
//or
console.log(a["subject"]["FCSP2"])

console.log(a["Marks"][2])
//or
console.log(a.Marks[2])