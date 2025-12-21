// selection sort
const selection = (a) => {
    for (let i = 0; i < a.length; i++) {
        let minidx = i
        for (let j = i + 1; j < a.length; j++) {
            if (a[j] < a[minidx]) {
                minidx = j
            }
        }
        [a[i], a[minidx]] = [a[minidx], a[i]]
    }
    return a
}

// console.log(selection([1, 4, 55, 6, 78, 33, 24, 90, 76, 4, 12]));

const bubble = (a) => {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j + 1], a[j]] = [a[j], a[j + 1]]
            }
        }
    }
    return a
}

// console.log(bubble([1, 4, 55, 6, 78, 33, 24, 90, 76, 4, 12]));

const insersion = (a) => {
    for (let i = 0; i < a.length; i++) {
        let j = i + 1
        while (a[j] < a[j - 1]) {
            [a[j], a[j - 1]] = [a[j - 1], a[j]]
            j--
        }
    }
    return a
}
// console.log(insersion([1, 4, 55, 6, 78, 33, 24, 90, 76, 4, 12]));

