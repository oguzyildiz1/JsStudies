function checkUsername() {
    var elMsg = document.getElementById('feedback');
    // eğer username değeri küçükse
    if (this.value.length < 7) {
        elMsg.textContent = "Username should be 7 or more!";
    } else {
        elMsg.textContent = '';
    }
}

var elUsername = document.getElementById('username'); // username elementi
elUsername.onblur = checkUsername;
