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

// console.log(bsearch([1, 3, 5, 7, 7, 7, 7, 8, 11, 23, 56], 7));

// first and last occurance
const firstNLast = (a, k) => {
    const first = findFirst(a, k);
    if (first === -1) return [-1, -1];
    const last = findLast(a, k);
    return [first, last];
};

const findFirst = (a, k) => {
    let left = 0, right = a.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (a[mid] === k) {
            result = mid;
            right = mid - 1; // move left
        } else if (a[mid] > k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result;
};

const findLast = (a, k) => {
    let left = 0, right = a.length - 1;
    let result = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (a[mid] === k) {
            result = mid;
            left = mid + 1; // move right
        } else if (a[mid] > k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return result;
};


console.log(firstNLast([0, 0, 1, 1, 1, 4, 5, 5], 2));
