var elUsername = document.getElementById('username');

var elMsg = document.getElementById('feedback');


function checkUsername(minLength) {
    if (elUsername.value.length < minLength) {
        // set the error message
        elMsg.textContent = 'Username must be ' + minLength + ' chars or more';
    } else {
        elMsg.innerHTML = '';
    }
}



elUsername.addEventListener('blur', function () {
    checkUsername(6);
}, false);