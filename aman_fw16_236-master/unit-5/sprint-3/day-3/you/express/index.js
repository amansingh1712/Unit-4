

const express = require('express');


const app = express(); //one app instance stands for one server.

//home page
app.get('/', (req, res) => {
   res.end("welcome homepage")
})

//products page

//get request on products page

app.get('/products', (req, res) => {
    res.end(JSON.stringify(["books", "mobiles", "laptops"]));

    // res.end("welcome products page");
    // res.end(JSON.stringify(["books", "mobiles", "laptops"]));
})
app.get("/webpage", (req, res) => {
    res.send("<h1>Welcome to webpage</h1>")// send will automatically know that
    //it is html data type.
})


app.get('/products', (req, res) => {
    // res.end(JSON.stringify([1, 2, 3,4]));

    res.send([1, 2, 3, 4]);//send is the most commonly used to write and the response
     //without worrying about the data type.
    //send is very useful wrapper around end.


})

//post request on products page


app.post('/products', (req, res) => {
    // res.end(JSON.stringify([1, 2, 3,4]));

    res.send([1, 2, 3, 4]);//send is the most commonly used to write and the response
     //without worrying about the data type.
    //send is very useful wrapper around end.


})

//In products page


//1.Books page
app.get('/products/books', (req, res) => {
   res.end("welcome books page")
})


//2.Mobiles page
app.get('/products/mobiles', (req, res) => {
   res.end("welcome mobiles page")
})

//3.laptops page
app.get('/products/laptops', (req, res) => {
   res.end("welcome laptops page")
})





app.listen(8080, () => {
    console.log('server started on http://localhost:8080');
});