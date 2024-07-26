const images = [
    'img/001.jpg', 'img/002.jpg', 'img/003.jpg', 'img/004.jpg', 'img/005.jpg',
    'img/006.jpg', 'img/007.jpg', 'img/008.jpg', 'img/009.jpg'
];
let currentIndex = 0;
const imageElement = document.getElementById('image');
const loaderWrapper = document.getElementById('loader-wrapper');
const leftSpace = document.querySelector('.left-space');
const rightSpace = document.querySelector('.right-space');
const startOverButton = document.getElementById('start-over');

// Function to show loader
function showLoader() {
    loaderWrapper.style.display = 'flex';
    leftSpace.classList.add('hidden');
    rightSpace.classList.add('hidden');
}

// Function to hide loader
function hideLoader() {
    loaderWrapper.style.display = 'none';
    leftSpace.classList.remove('hidden');
    rightSpace.classList.remove('hidden');
}

// Function to update the image
function updateImage() {
    showLoader(); // Show loader before changing image
    setTimeout(() => { // Simulate loading time
        imageElement.src = images[currentIndex];
        hideLoader(); // Hide loader after changing image
    }, 500); // Adjust timeout to simulate load time if necessary
}

// Function to show the start-over button on the last page
function updateButtons() {
    if (currentIndex === images.length - 1) {
        document.querySelector('.right-space').style.display = 'none';
        startOverButton.style.display = 'block';
    } else {
        document.querySelector('.right-space').style.display = 'flex';
        startOverButton.style.display = 'none';
    }
    if (currentIndex === 0) {
        document.querySelector('.left-space').style.display = 'none';
    } else {
        document.querySelector('.left-space').style.display = 'flex';
    }
}

// Function to go to the previous image
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
        updateButtons();
    }
}

// Function to go to the next image
function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
        updateButtons();
    }
}

// Function to go to the start
function goToStart() {
    currentIndex = 0;
    updateImage();
    updateButtons();
}

// Initial setup
updateImage();
updateButtons();
