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

pairs([1, 3, 5, 6, 7, 9], 8);
