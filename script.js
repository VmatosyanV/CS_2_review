// Эффект плавного интерактивного параллакса для фона в пределах Hero-секции
document.addEventListener('mousemove', (e) => {
    const bgImage = document.querySelector('.bg-image');
    
    // Вычисляем отклонение мыши от центра текущего экрана
    const xOffset = (e.clientX / window.innerWidth - 0.5) * 20; // Интенсивность движения по горизонтали
    const yOffset = (e.clientY / window.innerHeight - 0.5) * 20; // Интенсивность движения по вертикали
    
    // Мягко сдвигаем фоновое изображение
    bgImage.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;
});
