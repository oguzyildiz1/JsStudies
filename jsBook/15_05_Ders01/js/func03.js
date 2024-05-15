//average speed findir
// formula: S = d / t


var distance, time;
distance = 500;
time = 5;

function findSpeed(distance, time) {
    var speed = distance / time;
    return speed;
}

speed = findSpeed(distance, time);

var el = document.getElementById("result");
el.textContent = "Average speed is " + speed;