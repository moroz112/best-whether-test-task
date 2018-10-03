// 1. Function declarations in JS

// 1.1; Function declaration

function someFunc(a, b) {
    console.log('sum', a + b)
}

// 1.2 Function expression

var someFunc = function(a, b) {
    console.log('sum', a + b)
}

var someFunc = (a, b) => {
    console.log('sum', a + b)
}

// Problem solved by arrow function

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // `this` указывает на объект Person
    }, 1000);
}

var p = new Person();

// Arguments pseudo-array

function someFunc(a, b, c) {
    console.log('arguments length', arguments.length);
    console.log('first argument', arguments[0]);
}
someFunc(1,2,4);
// arguments length 3
// first argument 1

function someFunc(a,b,c) {
    // ES5
    var args = [].slice.call(arguments, 0);

    // ES6
    var args = Array.from(arguments);
    var args = [...arguments];
}



// Problem solved by arrow function

function Person(){
    this.age = 0;

    setInterval(() => {
        this.age++; // `this` указывает на объект Person
    }, 1000);
}

var p = new Person();

// Default params

function foo( a = 5, b = 10) {
    console.log( a + b);
}

foo(1); // result 11
foo(1,2) //result 2
foo()  //result 15

// Function context
function some() {
    this.a = 3;
}

function some1() {
    this.a = 4;

    this.doSome = function() {
        return this.a
    }
}

var s = new some()
var s1 = new some1()0

// Closure function


function someFunc() {
    var a = 4;

  function someFunc() {
    console.log(a)
  }
    olo2();
}

// High order function

function logMethod1(a, b) {
    console.log('This is first log method. The sum is', a + b)
}
function logMethod2(a, b) {
    console.log('This is second log method. The sum is', a + b);
}

function high(a ,b, logMethod) {
    logMethod(a,b)
}

high(3, 2, logMethod2) //result   this is totally different log method 5)
high(3, 2, logMethod1) //result   this is sum guys 5)