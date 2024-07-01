function displayMessage() {
    var elMsg = document.getElementById('feedback');
    // bir mesaj yazılacak
    elMsg.textContent = 'You have scrolled the page';
}

var elBody = document.getElementsByTagName('body')[0];
elBody.style.backgroundColor = '#f2f2f2';
elBody.onscroll = displayMessage;
