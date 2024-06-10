let currentIndex = 0;
const items = document.querySelectorAll('.gallery-item');

function changeImage(direction) {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + items.length) % items.length;
    items[currentIndex].classList.add('active');
}

// Initialize the gallery by showing the first item
items[currentIndex].classList.add('active');
