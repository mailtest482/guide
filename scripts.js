const images = [
    'img/001.jpg', 'img/002.jpg', 'img/003.jpg', 'img/004.jpg', 'img/005.jpg',
    'img/006.jpg', 'img/007.jpg', 'img/008.jpg', 'img/009.jpg'
];
let currentIndex = 0;

function updateImage() {
    const img = document.getElementById('image');
    img.src = images[currentIndex];
    updateControls();
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
}

function updateControls() {
    const leftSpace = document.querySelector('.left-space');
    const rightSpace = document.querySelector('.right-space');
    const startOverButton = document.getElementById('start-over');

    // Hide or show the left and right arrows and start-over button based on current index
    if (currentIndex === 0) {
        leftSpace.querySelector('.arrow').style.display = 'none';
    } else {
        leftSpace.querySelector('.arrow').style.display = 'flex';
    }

    if (currentIndex === images.length - 1) {
        rightSpace.querySelector('.arrow').style.display = 'none';
        startOverButton.style.display = 'block';
    } else {
        rightSpace.querySelector('.arrow').style.display = 'flex';
        startOverButton.style.display = 'none';
    }
}

function goToStart() {
    currentIndex = 0;
    updateImage();
}

// Initialize the controls on page load
updateImage();
