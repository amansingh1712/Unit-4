const http = require('http');
//http2,http3 is fatser than http.



const fs=require('fs');


const server = http.createServer((req, res) => {
    // console.log('res:', res);
    // console.log('req:', req.headers);


    // res.setHeader('Content-Type', 'text/html');
    // res.setHeader('Content-Type', 'application/json');
    // res.end("[1,2,3,4]");//done
    // res.setHeader('Content-Type', 'text/plain');
    
    // res.write('hello\n');
    // res.write('h');//one chunk

    // res.write('e');//2nd chunk
    // res.write('l');
    // res.write('l');
    // res.write('o');
    
    // res.end("<h1>Hello world!</h1>");  //end to say that server is done sending the data.
//  res.write('hello\n')//we can not write after end of server request.
    
    
    // console.log(req.url);


    // if (req.url === "/") {
    //     return res.end("welcome to home page");
    // }


    // if (req.url === "/products"){
    //     res.setHeader('Content-type', 'application/json');
    //     return res.end(JSON.stringify([1,2,3,4,5,6]));
    // }
    
    // res.end("Welcome to home page")

    // if (req.url === "/file") {
    //     const data = fs.readFileSync("./data/txt", { encoding: 'utf8' });
    //     res.end(data);
    // }
    // if (req.url === "/file") {
    //     fs.readFile("./data.txt", { encoding: 'utf8' }, (err, data) => {
    //         if (err) {
    //             console.log('err:', err.message);
               
    //         }
    //         res.end(data);
    //    })
    // }


    // if (req.url === "/") {
    //     fs.readFile("./index.html", { encoding: 'utf8' }, (err, data) => {
    //         if (err) {
    //             console.log('err:', err.message);
               
    //         }
    //         res.setHeader('Content-Type', 'text/html');
    //         res.end(data);
    //    })
    // }


    //for large file:-1MB data.txt
    // >>stream of data.
    // if (req.url === "/stream") {
    //     const readStream = fs.createReadStream("./data.txt");

    //     readStream.pipe(res);

    //     //stream=continuous chunks of data.
    // }

    // console.log(req.method)


    if (req.method === "POST" && req.url === "/create") {
        //create user or anything you can do here.
    }

    

})
//port range -1000 to 65535
// first 1000 ports are reserved for os itself.
server.listen(8080, () => {
    console.log('listening on port 8080 aman');
});



//fetch(),axios()

//bechmarking:-

//total reuests=5000

//server1=2500

//server2=2500


//fetch().then(res => res.json)//json is stream here.