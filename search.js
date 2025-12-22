const bsearch = (a, k) => {
    let left = 0,
        right = a.length - 1;
    let mid = parseInt(left + right / 2);
    while (a[mid] != k) {
        if (a[mid] > k) {
            right = mid;
        } else {
            left = mid;
        }
        mid = parseInt(left + right / 2);
    }
    return mid;
};

console.log(bsearch([1, 3, 5, 7, 7, 7, 7, 8, 11, 23, 56], 7));