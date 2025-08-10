function outer() {
    let x=5;

    function inner() {
        console.log(x);
    }
    console.log(x)
    return inner;
}


const f = outer();
// outer()
// f()

f()