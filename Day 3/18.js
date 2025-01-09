function fib(n) {

    let a = 0, b = 1;

    console.log(a); 

    for (let i = 1; i < n; i++) {

        console.log(b); 

        let nextdigit = a + b;

        a = b;

        b = nextdigit;
    }
}

fib(10); 
