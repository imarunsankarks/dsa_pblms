//we will use Map() for hashing

const freq = (arr) => {
    return arr.reduce((m, curr) => {
        if (!m.has(curr)) {
            m.set(curr, 1)
        } else {
            m.set(curr, m.get(curr) + 1)
        }
        return m
    }, new Map())
}

console.log(freq([1, 2, 1, 3, 4, 2, 1, 5, 5, 5, 4, 6]));
