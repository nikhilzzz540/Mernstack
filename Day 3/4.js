
const set = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
for (let i = 0; i < set.length; i++) {
    if (set[i] % 3 === 0) {
        console.log(set[i] + " is a multiple of three");
    } else {
        console.log(set[i] + " is not a multiple of three");
    }
}
