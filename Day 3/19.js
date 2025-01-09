function pali(str) {

    return str === str.split('').reverse().join('');

}

console.log(pali("malayalam")); 

console.log(pali("github")); 

console.log(pali("python"));
