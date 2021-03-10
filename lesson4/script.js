
// получение текста со страници (можно добавить по другому)
let text = document.getElementById('textContainer').innerHTML;
console.log(`Основной текст \n ${text}`);

// получение текста с заменой всех ' на "
let textOne = text.replace(/\'/g,'"');
console.log(`Обработанный текст \n ${textOne}`);

// получение текста с заменой всех ' на ", но если ' в слове, то изменяем на "
let textTwo = text.replace(/\'/g,'"');
textTwo = textTwo.replace(/\b\"\b/g, "'");
console.log(`Обработанный текст улучшенная версия \n ${textTwo}`);

// вывод текста
document.getElementById('textContainerComplitUpdate').innerHTML = textTwo;
