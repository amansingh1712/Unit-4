const path = require('path');//it handles all thing related to path.



//CJS vs ESM
//language construct
// const isEven = require("is-even");
// console.log(isEven(2));



// const x = require("./another");


// import { obj } from "./another.js";
// console.log('obj:', obj)

// const data = fs.readFileSync("./test.txt", { encoding: "utf-8" });
// console.log('data:', data)

const fs = require("fs");


// fs.readFile("./test.txt", { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//         console.log("error occured",err.message)
//     }
//     console.log(data);
// })

// console.log("outside readfile");


// const os = require("os");


// console.log(os.cpus().length);
// console.log(os.version(),os.arch(),os.platform());



// const str="hell\to"
// console.log('str:', str);


fs.readFile(path.join(".","data","test.txt"), { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log("error occured",err.message)
    }
    console.log(data);
})






