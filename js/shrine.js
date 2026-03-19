const silverLink = document.getElementById("silverShrine");

let currentState = false;
let animationId = null;

function shrineEnter() {
    // const containerRect = container.getBoundingClientRect();
    const ballRect = ball.getBoundingClientRect();
}

function enter() {
    console.log("hi :)");
    if(currentState == true) {
        exit();
    }else{
        currentState = true;
        if (!animationId) {
            animationId = requestAnimationFrame(shrineEnter);

        }
    }
}

function exit() {
    cancelAnimationFrame(animationId);
    animationId = null;
}

document.getElementById("friends").addEventListener('click', enter());