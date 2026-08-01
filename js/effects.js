import {Effects, EffectsSettings } from './const';

const formNode = document.querySelector("#upload-select-image");
const effectsListNode = formNode.querySelector('.effects__list');
const imageNode = formNode.querySelector('.img-upload__preview img');
const sliderNode = formNode.querySelector('effect-level__slider');
const effectValueNode = formNode.querySelector('.effect-level__value'); 
const sliderContainerNode = formNode.querySelector('.effect-level');

let currentEffect = Effects.NONE;

noUiSlider.create(sliderNode, {
  range:{
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower',

});

sliderNode.noUiSlider.on('update', () => {
  const value = sliderNode.noUiSlider.get();

   effectValueNode.value = value;

   const {style,units} = EffectsSettings[currentEffect];

  imageNode.style.filter = `${style}(${value}${units})`;
});

const updateOptions = () => {
  sliderNode.noUiSlider.updateOptions(EffectsSettings[currentEffect].slider);
};

export const resetEffects = () => {
  currentEffect=Effects.NONE;
   updateOptions();
   imageNode.style.filter='';
   sliderContainerNode.classList.add('hidden');
};


effectsListNode.addEventListener ('change', (evt) => {
  currentEffect = evt.target.value;

  if(currentEffect===Effects.NONE) {
    resetEffects();
    return;
  } 
  updateOptions();
   sliderContainerNode.classList.remove('hidden');
});




resetEffects();