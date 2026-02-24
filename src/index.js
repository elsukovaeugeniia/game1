const gameField = document.getElementById('game-field');

// Создаём игровое поле 4x4
for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  gameField.appendChild(cell);
}

// Загружаем персонажа
const characterImg = document.createElement('img');
characterImg.className = 'character';

// Условная загрузка изображения: моковый путь в тестах, реальный — в продакшене
if (process.env.NODE_ENV === 'test') {
  characterImg.src = 'test-image.png'; // Моковый путь для тестов
} else {
  characterImg.src = require('./images/goblin.png'); // Реальный путь в продакшене
}

characterImg.onload = function() {
  console.log('Изображение гоблина успешно загружено');
  placeCharacter();
};

characterImg.onerror = function() {
  console.error('Не удалось загрузить goblin.png');
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function placeCharacter() {
  const cells = document.querySelectorAll('.cell');
  const randomCell = cells[getRandomInt(0, 15)];
  randomCell.appendChild(characterImg);
}

if (characterImg.complete) {
  placeCharacter();
}

setInterval(() => {
  const cells = document.querySelectorAll('.cell');
  let currentCell = document.querySelector('.cell:has(img)');
  let newCell;

  do {
    newCell = cells[getRandomInt(0, 15)];
  } while (currentCell && newCell === currentCell);

  if (newCell) {
    newCell.appendChild(characterImg); // просто меняем родителя — без removeChild!
  }
}, 2000);

// Экспортируем для тестирования
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getRandomInt, placeCharacter };
}
