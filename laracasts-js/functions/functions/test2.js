// immediately invoked function

(function(){


var differ = function (a, b) {
	return a - b;
};


console.log(differ(10, 2));

//random num generator
	

var randomNum = function(tries){
	for(let i = 0; i < tries; i++) {
		let result = Math.floor(Math.random() * 10); // 0,1
		document.querySelector('body').innerText += " " + result; 
	}
};

randomNum(5);

var product = function (x, y) {
	return x * y;
};

console.log(product(3, 5));

var result = (a, b) => a * b;

console.log(result(10, 30));

var selectBiggerNum = (a, b, c, d) => {
	let bigger;
	let currentNum;
	let array = [a, b, c, d];

	for(let i = 0; i < 3; i++) {
		currentNum = array[i]; // a
		if (currentNum > array[i + 1]) // a > b
		{
			bigger = currentNum;
		}
	}
	
	return bigger;
}

var biggerNumber = selectBiggerNum(4, 10, 2, 7);
console.log(biggerNumber);

// anonymous function
// anonymous anonymous
var divide = (a, b) => {
	
	if (b === 0) {
		// throw new Error("b cannot be 0");
	}
	
	return a / b;
};

console.log(divide(3, 0));


var buyBicycle = (a, b, c) => {
	var message = '';
	var arr = [a, b, c];

	for (let i = 0; i < 3; i++) {
		if(arr[i] == "bmw") {
			throw new Error(`${arr[i]} is not a bicycle`);
		}
		message += arr[i] + " ";
	}
	return message += "are all valid bicycle options";
}

console.log(buyBicycle("wolfenstein", "bianchi", "tarkan"));

})(); // 