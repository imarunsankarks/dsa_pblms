const largest = (arr) => {
    let large = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i]
        }
    }
    return large
}

// console.log(largest([1, 4, 3, 6, 2, 7, 88, 9.22, 44]))

const secLarge = (arr) => {
    let large = -Infinity
    let secLarge = -Infinity
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > large) {
            large = arr[i]
        } else if (arr[i] > secLarge && arr[i] < large) {
            secLarge = arr[i]
        }
    }
    return secLarge != -Infinity ? secLarge : -1
}

// console.log(secLarge([10, 10, 10, 10]))

const isArrSorted = (arr) => {
    let prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < prev) {
            return false
        }
        prev = arr[i]
    }
    return true
}

// console.log(isArrSorted([-4, -3, -2, -1]))

const removeDupli = (arr) => {
    return new Set(arr).size
}

// console.log(removeDupli([1, 1, 2, 3, 4, 4, 6]))

const leftRot = (arr) => {
    let left = arr[0]
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i]
    }
    arr[arr.length - 1] = left
    return arr
}

// console.log(leftRot([8, 9, 1, 2, 3, 4, 4, 6]))

const leftByD = (a, d) => {
    let rot = d % a.length
    const newArr = []
    function rotate(arr, l, r) {
        while (l < r) {
            let i = 0
            let temp1 = arr[l]
            arr[l] = arr[r - 1 - i]
            arr[r - 1 - i] = temp1
            l++
            r--
            i++
        }
        return arr
    }
    a = rotate(a, 0, a.length - rot)
    a = rotate(a, a.length - rot, a.length)
    a = rotate(a, 0, a.length)

    return a
}

// console.log(leftByD([1, 2, 3, 4, 5, 6], 5))

const zeroToEnd = (a) => {
    let i = 0

    for (let k = 0; k < a.length; k++) {
        if (a[k] != 0) {
            let temp = a[i]
            a[i] = a[k]
            a[k] = temp
            i++
        }
    }
    return a
}
// console.log(zeroToEnd([1, 0, 3, 0, 5, 6]))

const linear = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == val)
            return i
    }
}
// console.log(linear([1, 0, 3, 0, 5, 6], 0))

const missing = (arr) => {
    let len = arr.length
    const sum = len * (len + 1) / 2
    let arrSum = 0
    for (let i = 0; i < len; i++) {
        arrSum += arr[i]
    }
    return sum - arrSum
}

// console.log(missing([1, 0, 2, 4, 5, 3]))

const ones = (arr) => {
    let max = 0
    let freq = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            if (max > 0) {
                freq++
            } else {
                freq = 1
            }
            max = Math.max(max, freq)
        } else {
            freq = 0
        }
    }
    return max
}
// console.log(ones([1, 0, 1, 1, 1, 0, 0, 0, 0, 1]))

const insersionSort = (arr) => {
    for (let j = 1; j < arr.length; j++) {
        let i = j
        while (arr[i] < arr[i - 1]) {
            let temp = arr[i]
            arr[i] = arr[i - 1]
            arr[i - 1] = temp
            i--
        }
    }
    return arr
}
// console.log(insersionSort([8, 2, 4, 6, 3, 5, 1, 1, 0]))

const bubbleSort = (a) => {
    for (let i = 0; i < a.length; i++) {
        for (let j = 1; j < a.length; j++) {
            if (a[j - 1] > a[j]) {
                let temp = a[j - 1]
                a[j - 1] = a[j]
                a[j] = temp
            }
        }
    }
    return a
}

// console.log(bubbleSort([8, 2, 4, 6, 3, 5, 1, 1, 0, 9, 8, 6, 2]))

const selectSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let small = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[small]) {
                small = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[small]
        arr[small] = temp
    }
    return arr
}
// console.log(selectSort([8, 2, 4, 6, 3, 5, 1, 1, 0, 9, 8, 6, 2]))

const arrayUnion = (a1, a2) => {
    let merged = [...new Set([...a1, ...a2])]
    return merged.sort()
}

// console.log(arrayUnion([8, 2, 4, 6, 3], [5, 1, 1, 0, 9, 8, 6, 2]))

const oneToN = (n) => {
    if (n === 0) return;
    oneToN(n - 1);
    console.log(n);
};

// oneToN(10);

const largestSubArraySum = (arr) => {
    let sum = 0
    let largeSum = -Infinity
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (arr[i] + sum < 0) {
            sum = Math.max(arr[i], sum)
        }
        largeSum = Math.max(largeSum, sum)
    }
    return largeSum

}
console.log(largestSubArraySum([2, 2, -7, 11]))

