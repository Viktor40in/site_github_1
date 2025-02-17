// Получаем элементы DOM
const toggleButton = document.getElementById('toggleDocs');
const docsList = document.getElementById('docsList');

// Функция для переключения видимости списка документов
function toggleDocs() {
    if (docsList.style.display === 'none') {
        docsList.style.display = 'block';
        toggleButton.textContent = 'Скрыть'; // Изменяем текст кнопки
    } else {
        docsList.style.display = 'none';
        toggleButton.textContent = 'Раскрыть'; // Возвращаем исходный текст
    }
}

// Добавляем обработчик события для кнопки
toggleButton.addEventListener('click', toggleDocs);