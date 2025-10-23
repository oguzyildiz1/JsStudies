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





/*
document.querySelector('body').innerText = product;

// multiply

var product = function(3, 5) {
	return 3 * 5;
};