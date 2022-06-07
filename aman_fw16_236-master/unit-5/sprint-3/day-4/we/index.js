
const express = require('express');

const groceryRouter = require("./routes/groceries.route")

const app = express();

// app.get('/', (req, res) => {
//     res.end("hello");
// })

// app.use(groceryRouter);


app.use((req, res, next) => {

    //logger middelware
    console.log("Route", req.url, "Method:", req.method, "At:", new Date());
    next();
})


app.use((req, res, next) => {

    //auth middleware
    if (!req.headers["apikey"]) {
        return res.status(401).send("user is not authenticated")
    }
    next();
});


//create a middelware that calculates time taken by req.

app.use((req, res, next) => {
    // performance.now();//nodejs version of giving time to do something

    const t1 = performance.now();//current time
    next();

    constt2 = performance.now(); //time after next call

    console.log("time taken",t2-t1)
})





app.get('/', (req, res) => {
    res.send("hello");
})


app.get("/groceries")

app.listen(3000);

//401:-Inauthorized-I don't know who you are.
//403:-Forbidden -I know you who you are but you are not allowed to acess   this.


