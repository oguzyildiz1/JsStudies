function checkUsername(e, minLength) {
    var target = e.target;
    console.log(target);

}

var el = document.getElementById('username');
el.addEventListener('blur', function (e) {
    checkUsername(e, 5);
}, false);

