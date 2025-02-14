// arrow function
const arrowFunc = (a,b) => {
    let result = a+b;
    return result;
}
function Timer() {
    this.seconds = 0;
    setInterval(() => {
      this.seconds++;
      console.log(this.seconds);
    }, 1000);
}
  
const timer = new Timer();
// 1, 2, 3, ... (increments every second)

// set timeout func
setTimeout(() => {
    console.log("happy");
}, 2000)
