// // for-each loop
const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (item){
//     // console.log(item);
// } )

// coding.forEach( (val) => {
//     console.log(val);
// } )

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName,", and ", item.languageFileName);
})