var elUsername = document.getElementById('username');

var elMsg = document.getElementById('feedback');

function changeColor(colorName) {
    elUsername.style.backgroundColor = colorName;
}


function changePadding(paddingN) {
    elUsername.style.padding = paddingN;
}


elUsername.addEventListener('focus', function () {
    changeColor('red');
    changePadding(padValue);
}, false);

elUsername.addEventListener('blur', function () {
    changeColor('white');
}, false);

// ---  increasing padding size of username on focus
// getting value from padding input
// increase if button inc clicked
// decrease -- same
// reverse to default on blur


var elInpPadNumber = document.getElementById('paddingInp');

const elButInc = document.getElementById('inc');
var padValue;

elButInc.addEventListener('click', function () {
    let padValue = elInpPadNumber.value; // input value
    return padValue;
}, false)