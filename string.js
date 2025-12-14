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

// console.log(largestOdd("00214638922"));

const commonPrefix = (arr) => {
    arr.sort()
    let first = arr[0]
    let last = arr[arr.length - 1]
    let i = 0
    while (first[i] == last[i]) {
        i++
    }
    return first.substring(0, i)
}

// console.log(commonPrefix(['profile', 'profix', 'proplan', 'pro']));


