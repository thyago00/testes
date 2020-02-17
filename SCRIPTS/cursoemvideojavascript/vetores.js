let num = [5, 8, 4]
num[3] = 6
num.push(8)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)


/*for (let pos = 0; pos < num.length; pos++) {
    console.log(num[pos])
}
*/

for (let pos in num) {
    console.log(num[pos])
}

console.log(num.indexOf(5))