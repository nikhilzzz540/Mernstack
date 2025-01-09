let arr = [1, 5, 2, 3, 10, 9, 8, 7, 6];
let newArr = new Array(arr.length).fill(null);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
        for (let j = 0; j < newArr.length; j += 2) {
            if (newArr[j] === null) {
                newArr[j] = arr[i];
                break;
            }
        }
    } else if (arr[i] % 5 == 0) {
        for (let j = 0; j < newArr.length; j += 3) {
            if (newArr[j] === null) {
                newArr[j] = arr[i];
                break;
            }
        }
    }
}

console.log(newArr);