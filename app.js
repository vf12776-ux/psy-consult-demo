// Базовая ставка и коэффициенты (психолог потом поменяет)
const BASE_PRICE = 3500; // Базовая стоимость 50-минутной видео-консультации

const formatMultipliers = {
    video: 1.0,
    audio: 0.85,
    chat: 0.7,
    in_person: 1.25
};

const durationMultipliers = {
    30: 0.6,
    50: 1.0,
    75: 1.4,
    90: 1.8
};

function calculate() {
    // Получаем выбранные значения
    const problemType = document.getElementById('problemType').value;
    const format = document.getElementById('format').value;
    const duration = parseInt(document.getElementById('duration').value);

    // Рассчитываем стоимость
    let total = BASE_PRICE * formatMultipliers[format] * durationMultipliers[duration];

    // Округляем
    total = Math.round(total / 100) * 100;

    // Показываем детали
    document.getElementById('selectedFormat').textContent =
        document.getElementById('format').options[document.getElementById('format').selectedIndex].text;
    document.getElementById('selectedDuration').textContent = duration;
    document.getElementById('totalPrice').textContent = total.toLocaleString('ru-RU');

    // Показываем блок с результатом
    document.getElementById('resultBlock').style.display = 'block';

    // Плавно прокручиваем к результату
    document.getElementById('resultBlock').scrollIntoView({ behavior: 'smooth' });
}