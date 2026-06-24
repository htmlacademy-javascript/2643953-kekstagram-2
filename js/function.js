// функция проверки длины строки
const checkStringLength = (string, length) => string.length <= length;




// функция проверки является ли строка палиндромом

const isPalindrome = (string) => {
  const normal = string.replaceAll(' ', '').toLowerCase();
  let reversed = '';
  for(let i = normal.length - 1; i >= 0; i--) {
    reversed += normal[i];
  }
  return normal === reversed;
}



// функция извлечения цифр

const getDigits = (string) => {
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


