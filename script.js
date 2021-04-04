score = 0;
cross = true;
document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode)

    if (e.keyCode == 38) {
        Mon = document.querySelector('.Mon');
        Mon.classList.add('animateMon');


        setTimeout(() => {
            Mon.classList.remove('animateMon')
        }, 700);
    }
    if (e.keyCode == 39) {
        Mon = document.querySelector('.Mon');
        Monx = parseInt(window.getComputedStyle(Mon, null).getPropertyValue('left'));
        Mon.style.left = Monx + 112 + "px";
    }
    if (e.keyCode == 37) {
        Mon = document.querySelector('.Mon');
        Monx = parseInt(window.getComputedStyle(Mon, null).getPropertyValue('left'));
        Mon.style.left = (Monx - 112) + "px";
    }
}
setInterval(() => {
    Mon = document.querySelector('.Mon');
    gameOver = document.querySelector('.gameOver');
    lion = document.querySelector('.lion');

    Mx = parseInt(window.getComputedStyle(Mon, null).getPropertyValue('left'));

    My = parseInt(window.getComputedStyle(Mon, null).getPropertyValue('top'));

    lx = parseInt(window.getComputedStyle(lion, null).getPropertyValue('left'));

    ly = parseInt(window.getComputedStyle(lion, null).getPropertyValue('top'));
    offsetX = Math.abs(Mx - lx);
    offsetY = Math.abs(My - ly);
    console.log(offsetX, offsetY)
    if (offsetX < 113 && offsetY < 52) {
        lion.classList.remove('lionAni');
        cross=false;
        gameOver.innerHTML= "Game Over -Reload to play Again";
    }
    else if (offsetX < 145 && cross) {

        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;

        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(lion, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            lion.style.animationDuration = newDur + 's';


        }, 500);
    }

}, 10);


function updateScore(score) {
    scoreCont.innerHTML = "Your score: " + score

}