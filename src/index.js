module.exports = function reverse(n) {
    let i = 0;
    let result = '';
    n = n.toString();
    while (i < n.length) {
        result = `${n[i]}${result}`
        i = i + 1;
    }
    return parseInt(result);
}