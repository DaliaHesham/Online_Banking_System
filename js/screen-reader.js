const box = document.querySelector('.box');
let positionX = 0;
let positionY = 0;

document.addEventListener('keydown', function(event) {
  const key = event.key;
  const boxWidth = box.offsetWidth;
  const boxHeight = box.offsetHeight;
  const windowHeight = window.innerHeight;

  if (key === 'ArrowUp' && positionY > 0) {
    positionY -= boxHeight;
  } else if (key === 'ArrowDown') {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const remainingHeight = scrollHeight - (scrollTop + windowHeight);
    if (positionY < remainingHeight - boxHeight) {
      positionY += boxHeight;
    }
  } else if (key === 'ArrowLeft' && positionX > 0) {
    positionX -= boxWidth;
  } else if (key === 'ArrowRight' && positionX < (window.innerWidth - boxWidth)) {
    positionX += boxWidth;
  }

  box.style.top = positionY + 'px';
  box.style.left = positionX + 'px';
});