const bsearch = (a, k) => {
    let left = 0,
        right = a.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (a[mid] == k) {
            return mid
        } else if (a[mid] > k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
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


// console.log(firstNLast([0, 0, 1, 1, 1, 4, 5, 5], 2));

const searchInsert = (a, k) => {
    let left = 0,
        right = a.length - 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (a[mid] == k) {
            return mid;
        } else if (a[mid] > k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    if (a[0] > k) {
        return 0
    } else if (a[a.length - 1] < k) {
        return a.length
    } else
        return right + 1 >= a.length ? left : right + 1;
};

// console.log(searchInsert([1, 3, 5], 1));

const rotatedSorted = (a, k) => {
    let arr = [...a]
    let rot = findSmall(a)
    let first = find(arr.slice(0, rot), k)
    let second = find(arr.slice(rot), k)

    if (first == -1 && second != -1) {
        return arr.slice(0, rot).length + second
    } else if (second == -1) {
        return first
    } else {
        return second
    }

}

function find(a, k) {
    let left = 0,
        right = a.length - 1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (a[mid] == k) {
            return mid;
        } else if (a[mid] > k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return a[0] == k ? 0 : -1
}

function findSmall(a) {
    let left = 0,
        right = a.length - 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (a[mid] > a[right]) {
            left = mid + 1
        } else if (a[mid] < a[mid + 1] && a[mid] < a[mid - 1]) {
            return mid
        } else {
            right = mid - 1;
        }
    }
    return left
}
// console.log(rotatedSorted([4, 5, 6, 7, 0, 1, 2], 0));

function findPeak(a) {
    let left = 0,
        right = a.length - 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (a[mid] > a[right]) {
            left = mid + 1
        } else if (a[mid] < a[mid + 1] && a[mid] < a[mid - 1]) {
            return mid
        } else {
            right = mid - 1;
        }
    }
    return left
}

console.log(findPeak([4, 5, 6, 7, 0, 1, 2]));

