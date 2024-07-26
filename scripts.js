const images = [
    '001.jpg', '002.jpg', '003.jpg', '004.jpg', '005.jpg',
    '006.jpg', '007.jpg', '008.jpg', '009.jpg'
];
let currentIndex = 0;

function updateImage() {
    const img = document.getElementById('image');
    img.src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}
