describe('Game functionality', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('should create 16 cells', () => {
    const gameField = document.createElement('div');
    gameField.id = 'game-field';
    document.body.appendChild(gameField);

    require('../src/index.js');

    const cells = document.querySelectorAll('.cell');
    expect(cells.length).toBe(16);
  });

  test('should place character in a cell', async () => {
    jest.useFakeTimers();

    // Создаём игровое поле
    const gameField = document.createElement('div');
    gameField.id = 'game-field';
    document.body.appendChild(gameField);

    // Загружаем скрипт
    require('../src/index.js');

    // Запускаем все отложенные таймеры (включая создание ячеек и загрузку изображения)
    jest.runAllTimers();

    // Даём немного времени на завершение операций
    await new Promise(resolve => setTimeout(resolve, 50));

    // Проверяем, что персонаж создан и помещён в ячейку
    const character = document.querySelector('.character');
    expect(character).toBeTruthy();
    expect(character.src).toContain('test-image.png');

    // Дополнительно проверяем, что персонаж находится в какой‑то ячейке
    const cellWithCharacter = document.querySelector('.cell:has(.character)');
    expect(cellWithCharacter).toBeTruthy();
  }, 30000);

  test('should move character to different cell', async () => {
    jest.useFakeTimers();

    // Создаём игровое поле
    const gameField = document.createElement('div');
    gameField.id = 'game-field';
    document.body.appendChild(gameField);

    // Загружаем скрипт
    require('../src/index.js');

    // Запускаем все таймеры для начальной загрузки
    jest.runAllTimers();
    await new Promise(resolve => setTimeout(resolve, 50));

    // Получаем начальную позицию персонажа
    const initialCell = document.querySelector('.cell:has(.character)');
    expect(initialCell).toBeTruthy();

    // Имитируем прохождение 2 секунд (интервал перемещения)
    jest.advanceTimersByTime(2000);
    // Ждём завершения перемещения
    await new Promise(resolve => setTimeout(resolve, 100));

    // Получаем новую позицию персонажа
    const newCell = document.querySelector('.cell:has(.character)');

    expect(newCell).toBeTruthy();
    expect(newCell).not.toBe(initialCell);
  }, 30000);
});
