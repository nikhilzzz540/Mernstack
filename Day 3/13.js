
const inputString = "Hello World!";
const vowels = 'aeiouAEIOU';
let result = '';

for (let char of inputString) {
    if (vowels.includes(char)) {
        result += char;
    }
}

console.log(result);