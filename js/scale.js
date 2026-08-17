const SCALE = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100,
};

const formNode = document.querySelector('#upload-select-image');
const scaleSmallerNode = formNode.querySelector('.scale__control--smaller');
const scaleBiggerNode = formNode.querySelector('.scale__control--bigger');
const scaleValueNode = formNode.querySelector('.scale__control--value');
const imgPreviewNode = formNode.querySelector('.img-upload__preview img');

let currentScale = SCALE.DEFAULT;

const updateScale = () => {
  imgPreviewNode.style.transform = `scale(${currentScale / 100})`;
  scaleValueNode.value = `${currentScale}%`;
};

updateScale();

const changeScale = (step) => {
  currentScale = Math.min(Math.max(currentScale + step, SCALE.MIN), SCALE.MAX);
  updateScale();
};

scaleSmallerNode.addEventListener('click', () => {
  changeScale(-SCALE.STEP);
});

scaleBiggerNode.addEventListener('click', () => {
  changeScale(SCALE.STEP);
});

export const resetScale = () => {
  currentScale = SCALE.DEFAULT;
  updateScale();
};
