const sumArgs = (a) => {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] === "string") {
            return { message: "Invalid Input" }
        }
        sum += a[i]
    }
    return sum
}
console.log(sumArgs([1, 2]));
module.exports = sumArgs;