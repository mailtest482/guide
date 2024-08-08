const koreanImages = [
    'img/001.jpg', 'img/002.jpg', 'img/003.jpg', 'img/004.jpg', 'img/005.jpg',
    'img/006.jpg', 'img/007.jpg', 'img/008.jpg', 'img/009.jpg'
];

const englishImages = [
    'img/en_001.png', 'img/en_002.png', 'img/en_003.png', 'img/en_004.png', 'img/en_005.png',
    'img/en_006.png', 'img/en_007.png', 'img/en_008.png', 'img/en_009.png'
];

const firstImages = [
    'img/000.jpg'
];

let currentImages = [];
let currentIndex = 0;

const imageElement = document.getElementById('image');
const loaderWrapper = document.getElementById('loader-wrapper');
const leftSpace = document.querySelector('.left-space');
const rightSpace = document.querySelector('.right-space');
const startOverButton = document.getElementById('start-over');
const startOverButtonEn = document.getElementById('start-over-en');
const koreanVersionButton = document.getElementById('korean-version');
const englishVersionButton = document.getElementById('english-version');

// Function to show loader
function showLoader() {
    loaderWrapper.style.display = 'flex'; // Show loader wrapper
    leftSpace.classList.add('hidden');
    rightSpace.classList.add('hidden');
}

// Function to hide loader
function hideLoader() {
    loaderWrapper.style.display = 'none'; // Hide loader wrapper
    updateButtons(); // Update buttons after hiding loader
}

// Function to update the image
function updateImage() {
    showLoader(); // Show loader before changing image
    imageElement.src = ''; // Clear current image source to trigger reload
    imageElement.onload = () => {
        // Hide loader after the image has fully loaded
        hideLoader();
    };
    imageElement.onerror = () => {
        // In case of an error loading the image
        hideLoader();
        console.error('Error loading image');
    };
    // Set the new image source
    imageElement.src = currentImages[currentIndex];
}

// Function to update button visibility
function updateButtons() {
    if (currentIndex === 0 && currentImages === firstImages) {
        leftSpace.classList.add('hidden');
        rightSpace.classList.add('hidden');
        startOverButton.style.display = 'none';
        startOverButtonEn.style.display = 'none';
        koreanVersionButton.textContent = '교육자료';
        englishVersionButton.textContent = 'Educational materials';
    } else if (currentIndex === 0) {
        leftSpace.classList.add('hidden');
        rightSpace.classList.remove('hidden');
        startOverButton.style.display = 'none';
        startOverButtonEn.style.display = 'none';
        koreanVersionButton.textContent = '한글';
        englishVersionButton.textContent = 'English';
    } else if (currentIndex === currentImages.length - 1) {
        rightSpace.classList.add('hidden');
        startOverButton.style.display = currentImages === koreanImages ? 'block' : 'none';
        startOverButtonEn.style.display = currentImages === englishImages ? 'block' : 'none';
    } else {
        leftSpace.classList.remove('hidden');
        rightSpace.classList.remove('hidden');
        startOverButton.style.display = 'none';
        startOverButtonEn.style.display = 'none';
        koreanVersionButton.textContent = '한글';
        englishVersionButton.textContent = 'English';
    }
}

// Function to go to the previous image
function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateImage();
    }
}

// Function to go to the next image
function nextImage() {
    if (currentIndex < currentImages.length - 1) {
        currentIndex++;
        updateImage();
    }
}

// Function to go to the start
function goToStart() {
    currentIndex = 0;
    updateImage();
}

// Event listeners for arrows and button
document.querySelector('.left-space').addEventListener('click', prevImage);
document.querySelector('.right-space').addEventListener('click', nextImage);
document.getElementById('start-over').addEventListener('click', goToStart);
document.getElementById('start-over-en').addEventListener('click', goToStart);

// Event listeners for version buttons
document.getElementById('korean-version').addEventListener('click', () => {
    currentImages = koreanImages;
    currentIndex = 0;
    updateImage();
    koreanVersionButton.classList.add('hidden-button');
    englishVersionButton.classList.remove('hidden-button');
    startOverButton.style.display = 'none';
    startOverButtonEn.style.display = 'none';
});

document.getElementById('english-version').addEventListener('click', () => {
    currentImages = englishImages;
    currentIndex = 0;
    updateImage();
    koreanVersionButton.classList.remove('hidden-button');
    englishVersionButton.classList.add('hidden-button');
    startOverButton.style.display = 'none';
    startOverButtonEn.style.display = 'none';
});

// Initialize with 000.jpg and show both version buttons
currentImages = firstImages;
currentIndex = 0;
updateImage(); // Initialize with the first image (000.jpg)
