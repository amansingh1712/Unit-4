

const express = require('express');

const fs = require('fs');

// const fspromise = require('fs/promises')// it gives you async await promise

// const data= await fspromise.readFile("./")



const app = express();

//to acess the contents of the response body you have to write app.use() function between the server
// and routes.Because there is something call as next().
//the order of app.use() is important.It matters here.

//it is just a middelware it is going to parse all the requests.That is PUT,POST & PATCH.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//routes can be written as an array of routes.
app.get(['/',"/index.html"], (req, res) => {
    res.write("Hello");
    res.end("world!")
})

// app.get("/products", (req, res) => {
//     res.write("<h1>Products Page</h1>");
//     res.end(JSON.stringify([1, 2, 3, 4]));
// })

//Read the product

app.get("/products", (req, res) => {

    fs.readFile("./db.json", "utf8", (err, data) => {
        // res.end(JSON.stringify(data));//as data is already a string you need not
    //    to convert it
        
        // res.header("Content-Type", "application/json");//it will parse the data in a
          //proper json format
        
        // res.header("Content-Type", "text/plain");

        //you can see the diffrence between above two lines in hopscotch.io
        
        res.send(data)

        // res.json(JSON.parse(data));

  })


    // res.end(JSON.stringify([1, 2, 3, 4]));
})


//create  product
app.post("/products", (req, res) => {
    console.log(req.body);//it will be only accessible to you if you write app.use() in a right manner.


    //write req.body in db.json

    //to append the data in txt format
    // fs.appendFileSync("./db.txt", JSON.stringify(req.body));
    //          res.end("Product created successfully");


   //to write the data in json format:->
   
    fs.readFile("./db.json", (err, data) => {
        const parsed = JSON.parse(data);
    

        parsed.products = [...parsed.products, req.body];
        


        //             filename        data             encoding                  callback
         fs.writeFile("./db.json", JSON.stringify(parsed), { encoding: "utf-8" }, () => {
        
             res.status(201).send("Product created successfully");
    })
    })
    
    // res.end("Product Created");

    // res.send({});
})




//update the price of a product


app.put("/product/:id", (req, res) => {
//1.read the db.json
//2. get the products array,find   `id` 1 from it.
//3.remove that id from the array.
//4. write the filtered data to the db.json.    

    const { id } = req.params;

    fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
        const parsed = JSON.parse(data);




        fs.writeFile("./db.json", JSON.stringify(parsed), { encoding: "utf-8" }, () => {
             res.end("Product Updated");
            
        });
    })
   
 
    
   
})





//we are using /product here because we can not delete a update multiple products at
   // same time
//DELETE the product

app.delete("/product/:id", (req, res) => {
    
    //1.read the db.json
    //2. get the products array,find   `id` 1 from it.
    //3.remove that id from the array.
    //4. write the filtered data to the db.json.    

   
    const { id } = req.params;  //it will always be an object. {id:1 ,category:"electronics"}  
    //because it is an object you can destructre as well.

    fs.readFile("./db.json", { encoding: "utf-8" }, (err, data) => {
           
        const parsed = JSON.parse(data);

        if (!parsed.products.find(el => el.id === id)) {
            return res.status(404).send(`can not find product to delete with id ${id}.`);
        }


        // parsed.products = parsed.products.filter(el => el.id !== id);
        parsed.products = parsed.products.filter(el => el.name !== id);
        
        fs.writeFile("./db.json", JSON.stringify(parsed), { encoding: "utf-8" }, () => {
        
            res.end("Product Deleted");
        })
    })
    
});




// app.get("*", (req, res) => {
//     res.status(404).send("Not Found")
// })
app.all("*", (req, res) => {
    res.status(404).send("Not Found")
})

app.listen(8080, () => {
    console.log("server started at http://localhost:8080")
})