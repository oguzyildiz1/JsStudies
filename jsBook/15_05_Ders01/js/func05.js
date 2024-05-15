// finding the accelaration of an object
// a = delta V / delta T;

var acceleration = function (velocity, time) {
    return velocity / time;
};

var carAcc = acceleration(200, 15);

var el = document.getElementById("result");
el.textContent = "The acceleration of the car from 0 - 100 km/s is " + carAcc + " km/sec";