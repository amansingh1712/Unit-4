

const express = require('express'); //It imports the whole express library.
//import express from 'express';  //when company is using typescript with express.

const app = express();//Just callin a express function creates the server.


// const fs= require('fs');

// const app2=express();//creates 2nd server   we don'n need it now btw.


//this below two lines should be between server and request.Its order matters.

// app.use(express.urlencoded({extended: true}));
// app.use(express.json())

app.get("/", (req, res) => {
    // res.write("hi")
    // res.end("Hello");


    res.send("Hello  world!");


});
// app.get("/products", (req, res) => {
//    res.end(JSON.stringify({a:"a",b:"b",c:"c"}))
// });


//read the product
// app.get("/products", (req, res) => {
//     fs.readFile("./db.json", "utf-8  ", (err, data) => {
//         res.setHeader("Content-Type", "application/json")
//         res.send(data);
//     })
// })


//create the product

// status to create the product is 201;

// app.post('/products', (req, res) => {
    



//     fs.readFile("./db.json", { encoding: "utf8" }, (err, data) => {
//     const parsed = JSON.parse(data);
//     parsed.products = [...parsed.products, req.body];
    
//     fs.writeFile("./db.json", JSON.stringify(parsed), "utf-8", () => {
//         res.status(201).send("Product Created");
//     });

// })
// })

//update the product

// app.put("/product/1", (req, res) => {
//     //1.read the db.json
//     //2.get the product array and find "id" 1 from it
//     //3.replace that id from the product array
//     //4.write the filtered product array


    
// });

//delete the product


// app.delete("/product/:id", (req, res) => {
//     //1.read the db.json
//     //2.get the product array and find "id" 1 from it
//     //3.remove that id from the product array
//     //4.write the filtered product array
//     const parsed = JSON.parse
//     if (!parsed.products.find((el) => el.id === id)) {
//         return res.status(404).send("product not found");
//     } 



    // //to make delete the product array dynamic
    // const { id }=req.params;//Object {id:1} it will be always object
    // // const { }=req.params;//Object {id:1} it will be always object

    // fs.readFile("./db.json", { encoding: "utf8" }, (err, data) => {
    //     const parsed = JSON.parse(data);
    //     parsed.products = parsed.products.filter((el) => el.id !== id);
    
    //     fs.writeFile("./db.json", JSON.stringify(parsed), "utf-8", () => {
    //         res.send("Product Deleted");
    //     });

    // });



//send --wrapper arround end to support multiple types of file.




// app.post("/products", (req, res) => {
// res.end("Got data")
// })

// app.post("/products", (req, res) => {
//     console.log(req.body)
//     res.end(JSON.stringify("Product created"));
// });





//     app.get("./products/*", () => {
    
// })
//     app.get("*", (req, res) => {
//     res.status(404).send("Not found")
// })
    
    // app.get(["./","index.html"])//it will be executed for any route in the array
    
    //all --checks POST DELETE PUT 
//     app.all("*", (req, res) => {
//     res.status(404).send("Not found")
// })




app.listen(8000, () => {
    console.log('listening on port 8080')
});