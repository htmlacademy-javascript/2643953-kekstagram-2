
const NAMES = [
  'Ben', 'Alice', 'Anna', 'Jim', 'Sara', 'Kim', 'John', 'Richard', 'Sam'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Мгновение, когда время замирает.',
  'Тот самый трепетный миг, когда мир затаил дыхание.',
  'Лёгкая ностальгия, которая накрывает тёплой волной.',
  'Это похоже на воспоминание о том, чего ты никогда не видел, но остро чувствуешь.',
  'Здесь нет масок и постановок.',
  'Ощущение полной свободы.',
  'Взгляд уходит за горизонт, а душа наполняется вечной энергией.',
  'Это не просто картинка.',
  'Вдохновение, которое мы хотим передать.',
  'Это эмоция, которая тянет на дно или поднимает к облакам.'
];

const NUMBER_OF_OBJECTS = 25;

const COMMENTS = 30;

const Likes = {
  MIN: 15,
  MAX: 200
};

const CommentsId = {
  MIN: 10000 ,
  MAX: 1000000
};

const Avatar = {
  MIN: 1,
  MAX: 6
};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const getComment = () => ({
  id: getRandomPositiveInteger(CommentsId.MIN, CommentsId.MAX),
  name: getRandomArrayElement(NAMES),
  message: getRandomArrayElement(MESSAGES),
  avatar: `./img/avatar-${getRandomPositiveInteger(Avatar.MIN, Avatar.MAX)}.svg`
});

const createPhoto = (i) => ({
  description:getRandomArrayElement(DESCRIPTIONS),
  id: i,
  url: `./photos/${i}.jpg` ,
  likes:getRandomPositiveInteger(Likes.MIN, Likes.MAX),
  comments:Array.from({length: getRandomPositiveInteger(0, COMMENTS)}, getComment)
});

const ArrayOfPhotos = Array.from({length: NUMBER_OF_OBJECTS}, (_, i) => createPhoto(i + 1));
console.log(ArrayOfPhotos);
