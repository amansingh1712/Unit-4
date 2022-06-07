const http = require('http')
const fs = require('fs')
// fs.readFile('./text.txt', { encoding: 'utf-8' }, (e, d) => {
//     if (e) {
//         console.log(e);
//     }
//     else {
//         // res.end(d)
//         console.log('d:', d)
//     }
// })
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const data = fs.readFileSync('./text.txt', { encoding: 'utf-8' })
        res.end(data)
    }
    else if (req.url === '/textasync') {
        fs.readFile('./text.txt', { encoding: 'utf-8' }, (e, d) => {
            if (e) {
                console.log(e);
            }
            else {
                res.end(d)
                // console.log('d:', d)
            }
        })
    }
    else if (req.url === '/textstream') {
        const stream = fs.createReadStream('./text.txt')
        stream.pipe(res)
    }
    else if (req.url === '/textpromise') {
        fs.promises.readFile('./text.txt', { encoding: "utf-8" }, (e, d) => { })
            .then(data => {
                res.end(data)
            })
            .catch(err => {
                res.end(err)
            })
    }

})
server.listen(8080, () => {
    console.log('http://localhost:8080');
})