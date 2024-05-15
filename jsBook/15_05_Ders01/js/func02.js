var width, height;

width = 50;
height = 10;

function calculateArea(width, height) {
    var area = width * height;
    var el = document.getElementById("note");

    el.textContent = "The area is " + area + " cm2";
}

calculateArea(width, height);