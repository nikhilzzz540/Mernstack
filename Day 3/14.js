let string = "hello world";
let character = 'o';
let count = 0;

for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
        count++;
    }
}

console.log(`The character '${character}' occurs ${count} times in the string.`);