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

    // if (strs.length === 0) return "";

    // return strs.reduce((a, b) => {
    //     let i = 0;
    //     while (i < a.length && i < b.length && a[i] === b[i]) {
    //         i++;
    //     }
    //     return a.slice(0, i);
    // });
}

// console.log(commonPrefix(['profile', 'profix', 'proplan', 'pro']));

const isomorphic = (s, t) => {
    const s1 = new Set(s)
    const t1 = new Set(t)
    let m1 = new Map()
    if (s1.size == t1.size && s.length == t.length) {
        const sArr = [...s1];
        const tArr = [...t1];

        for (let i = 0; i < sArr.length; i++) {
            m1.set(sArr[i], tArr[i]);
        }
        for (let j = 0; j < s.length; j++) {
            if (m1.get(s[j]) != t[j]) {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

// console.log(isomorphic("bbbaaaba", "aaabbbba"));

const rotateString = (s, goal) => {
    let i = 0
    while (i < s.length) {
        let s1 = s.slice(1) + s[0]
        s = s1
        if (s1 === goal) {
            return true
        }
        i++
    }
    return false
}

// console.log(rotateString("defdefdefabcabc", "defdefabcabcdef"));
console.log(rotateString("abcde", "abced"));



