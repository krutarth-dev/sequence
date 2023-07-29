function printNumber(num) {

  console.log(num);

}

console.log(1);
//This line logs "1" to the console.

setTimeout(printNumber, 0, 2);
//This schedules the execution of the printNumber function with an argument of 2 after a delay of 0 milliseconds. 
//Although the delay is specified as 0, it doesn't mean the function will execute immediately. 
//Instead, it will be placed in the event queue and executed as soon as the current call stack is clear.

setTimeout(printNumber, 100, 3);
//This schedules the execution of the printNumber function with an argument of 3 after a delay of 100 milliseconds.

console.log(4);
//This line logs "4" to the console.

//Output 1 4 2 3 
