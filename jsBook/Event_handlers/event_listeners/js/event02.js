function checkUsername() {
    var elMsg = document.getElementById('feedback');
    elMsg.textContent = this.value;
}

var elUsername = document.getElementById('username');

elUsername.addEventListener('keyup', checkUsername, false);