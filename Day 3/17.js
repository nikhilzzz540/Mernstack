function hh(char) {

    const asciiOffset = 32; 
    
    const charCode = char.charCodeAt(0); 

    if (charCode >= 65 && charCode <= 90) { 

        return String.fromCharCode(charCode + asciiOffset); 
    }
    return char; 
}

const inputChar = 'MERNSTACK'; 

const result = hh(inputChar);

console.log("Original character:", inputChar);

console.log("Converted to lowercase:", result);