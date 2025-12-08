//palindrome check
const palindrome = (str) => {
    return str.trim().split(" ").reverse().join(" ")
}

console.log(palindrome("welcome to the jungle"))
