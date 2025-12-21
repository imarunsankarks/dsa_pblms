/*
When to use -
Array is sorted
Comparing pairs
Shrinking a search space
*/

// check if a pair of numbers in array gives k

const pairs = (a, k) => {
    let l = 0
    let r = a.length - 1
    while (a[l] + a[r] != k && l != r) {
        if (a[l] + a[r] > k) {
            r--
        } else {
            l++
        }
    }
    console.log(l, r);

}

// pairs([1, 3, 5, 6, 7, 9], 8);

const removeDupli = (a) => {
    if (a.length === 0) return a;

    let slow = 0;

    for (let fast = 1; fast < a.length; fast++) {
        if (a[fast] !== a[slow]) {
            slow++;
            a[slow] = a[fast];
        }
    }

    return a.slice(0, slow + 1);
};

console.log(removeDupli([1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5, 5]));

