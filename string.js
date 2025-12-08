//palindrome check
const palindrome = (str) => {
    return str.trim().split(" ").reverse().join(" ")
}

// console.log(palindrome("welcome to the jungle"))

const largestOdd = (num) => {
    let numbr = parseInt(num)
    while (numbr % 2 === 0) {
        numbr = Math.trunc(numbr / 10)
    }
    return `${numbr}`
}

console.log(largestOdd("00214638922"));

