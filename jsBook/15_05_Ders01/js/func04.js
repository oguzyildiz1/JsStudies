// finding the area and circumference of a circle

var radius;

function findSize(radius) {
    const pi = 3.14;
    var area = pi * radius ** 2;
    var circumference = 2 * pi * radius;
    var sizes = [area, circumference];

    return sizes;
}

radius = 15;
var sizes = findSize(radius);

var el = document.getElementById("result");
el.textContent = "Area is " + sizes[0] + "Circumference is " + sizes[1];
