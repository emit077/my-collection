
// ------------
// Eye tracking
// ------------

const eyeRightPupil = document.querySelector('.eye-right-pupil');
const eyeLeftPupil = document.querySelector('.eye-left-pupil');
const eyeLeftInner = document.querySelector('.eye-left-inner');
const innerEyeWidth = eyeLeftInner.getBoundingClientRect().width;
const innerEyeHeight = eyeLeftInner.getBoundingClientRect().height;
const pupilWidth = eyeLeftPupil.getBoundingClientRect().width;
const pupilHeight = eyeLeftPupil.getBoundingClientRect().height;
const xMovement = (innerEyeWidth - pupilWidth) / 2;
const yMovement = (innerEyeHeight - pupilHeight) / 2;

window.addEventListener('mousemove', updateEyePosition);

function updateEyePosition(event) {
  const posX = ((event.clientX / document.body.clientWidth) * 2 - 1) * xMovement;
  const posY = ((event.clientY / document.body.clientHeight) * 2 - 1) * yMovement;

  eyeLeftPupil.style.transform = `translate(${posX}px, ${posY}px)`;
  eyeRightPupil.style.transform = `translate(${posX}px, ${posY}px)`;
}