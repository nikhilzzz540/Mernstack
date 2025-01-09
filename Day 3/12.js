const upperStr = "HELLO WORLD";
let lowerStr = "";

for (let i = 0; i < upperStr.length; i++) {
    const charCode = upperStr.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
        lowerStr += String.fromCharCode(charCode + 32);
    } else {
        lowerStr += upperStr[i];
    }
}

console.log(lowerStr);

