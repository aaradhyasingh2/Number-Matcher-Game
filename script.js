var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble() {
  var clutter = '';

  for (var i = 1; i <= 60; i++) {
    //below line of code is for generating a random value in single digit like 1,2,9,8 and so on...etc
    var ran = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${ran}</div>`;
  }

  document.querySelector('#panelbottom').innerHTML = clutter;
}

function runTimer() {
  var timeout = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector('#timervalue').textContent = timer;
    } else {
      clearInterval(timeout);
      document.querySelector("#panelbottom").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector('#hitvalue').textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector('#scorevalue').textContent = score;
}

document
  .querySelector('#panelbottom')
  .addEventListener('click', function (dets) {
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
  });
runTimer();
makeBubble();
getNewHit();
increaseScore();
