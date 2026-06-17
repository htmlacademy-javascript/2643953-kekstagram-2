// функция проверки длины строки
const stringLength = (string, length) => string.length <= length;


//console.log(stringLength('qwq', 10));

// функция проверки является ли строка палиндромом

const isPalindrome = (string) => {
  const normal = string.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for(let i = normal.length - 1; i >= 0; i--) {
    reversed += normal[i];
  }
  return normal === reversed;
}

//console.log(isPalindrome('шалаш'));

// функция извлечения цифр

const digitString = (string) => {
  if (typeof string === 'number'){
    string.toString();
  }
  let digits = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] >= '0' && string[i] <= '9') {
      digits += string[i];
    }
  }
  return parseInt(digits, 10);
}

//console.log(digitString('ghj 25jhv874 5'));
