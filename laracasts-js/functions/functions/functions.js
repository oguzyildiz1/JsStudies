// examples are at the test2.js

// immediately invoked function
// it is used at the beginning of file for protecting your other functions in the page 
(function(){

	// write your own functions inside...


})();

function doNothing(){ // returns undefined
	
}

// function hoisting: sends functions to the top of the page; You can use them even if you have declared them below the page...

// function declaration
function divide(a, b) {
	return a / b;
}


// function expression
// This is the modern way of writing functions
var difference = function(a,b) {
	return a - b;
};

// arrow functions
var result = (a, b) => a * b;



/*
document.querySelector('body').innerText = product;

// multiply

var product = function(3, 5) {
	return 3 * 5;
};
*/

