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

