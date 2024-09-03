let snake = {
    // how many boxes are in the snake?
    'length': 4, //start
    'position': [0, 0], // x,y positions of head
    'direction': 'left' // up down left right for head
}

let random_box = {
    'position': 'random function',
    // function random yazılacak
}

let snake_head = document.querySelector('#snake-head');

var snake_bodies = document.querySelectorAll('.game-box div:not(.snake-head)'); // snake head olmayanlar

var pos_head_x = 200;
var pos_head_y = 200;
var pos_change = 25;
var post_body_x;

// going to write body

function set_snake_body() { // başlangıç pozisyonlarını oluşturur


    for (let i = 0; i < snake_bodies.length; i++) {// snake body initialization
        if (i === 0) {
            snake_bodies[i].style.left = (pos_head_x - 25) + 'px';
            snake_bodies[i].style.top = '200px';
        }
    }
    return "Ok";
}

function change_snake_pos() {
    pos_head_x += 25;
    snake_head.style.left = `${pos_head_x}px`;


    snake_bodies[0].style.left = (pos_head_x - pos_change) + 'px'; // ilk body box
    snake_bodies[0].style.top = 200 + 'px'; // ilk body box
}

const intervalID = setInterval(change_snake_pos, 2000);

function start_prog() {
    let check_body = set_snake_body();
}

start_prog();