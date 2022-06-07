const timeConversion = (time) => {
    let s = Math.floor(time / 1000)
    let m = Math.floor(s / 60)
    let h = Math.floor(m / 60)
    if (s < 60) {
        return `${s} seconds`
    }
    else if (s === 60) {
        return "1 minute"
    }
    else if (s < 120) {
        s = s - 60
        return `1 minute ${s} seconds`
    }
    else if (s < 3600) {
        s = s % 60
        return `${m} minutes ${s} seconds`
    }

    else if (s < 7200) {

        let min = Math.floor(m % 60);
        let sec = Math.floor(s % 60)
        return `1 hour ${min} minutes ${sec} seconds`
    }
    else {

        let min = Math.floor(m % 60);
        let sec = Math.floor(s % 60)
        return `${h} hours ${min} minutes ${sec} seconds`
    }
}
module.exports = timeConversion