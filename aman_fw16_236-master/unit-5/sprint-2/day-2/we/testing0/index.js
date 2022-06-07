// const console = undefined;
// as console is disabled in production in companies.


function sum(a, b) {

    if (typeof a === 'string' && typeof b === 'string') {
        return;
    }
    // console.log("in sum function");
    return a + b;
}

module.exports = sum;

// console.log(sum(1, 2));


//Glob