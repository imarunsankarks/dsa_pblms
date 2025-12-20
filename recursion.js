// 1 to n using recusrion
const oneToN = (n) => {
    if (n <= 0) return;
    oneToN(n - 1);
    console.log(n);
}

// oneToN(5)

const sumOfN = (n) => {
    if (n <= 0) return 0
    return n + sumOfN(n - 1)
}

// console.log(sumOfN(222));

const factorial = (n) => {
    if (n < 2) return 1
    return n * factorial(n - 1)
}

// console.log(factorial(2));

const reverseArr = (arr, length) => {
    if (length > arr.length / 2) {
        let temp = arr[arr.length - length]
        arr[arr.length - length] = arr[length - 1]
        arr[length - 1] = temp
        reverseArr(arr, length - 1)
    } else {
        console.log(arr);
        // return arr
    }
}

// reverseArr([9, 4, 3, 7, 11, 44, 32, 67, 8, 0, 5], 11)



