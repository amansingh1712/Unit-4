const file = require("fs")
file.appendFileSync('test.txt', "Web 16 Aman Singh")
file.readFile('./test.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log("1", err);
    }
    else {
        console.log(data);
    }
})

file.unlinkSync('test.txt')
file.writeFileSync('test.txt', "Aman Singh")
file.renameSync('./test.txt', './new.txt')
const path = require('path');
const filePath = path.join(__dirname, './');
file.readdir(filePath, function (err, d) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    console.log('d:', d)
    d.map((el) => {
        console.log(el);
    });
});