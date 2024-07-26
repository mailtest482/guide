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
    imageElement.src = images[currentIndex];
}

// Function to update button visibility
function updateButtons() {
    // Check if on the first page
    if (currentIndex === 0) {
        leftSpace.classList.add('hidden');
    } else {
        leftSpace.classList.remove('hidden');
    }

    // Check if on the last page
    if (currentIndex === images.length - 1) {
        rightSpace.classList.add('hidden');
        startOverButton.style.display = 'block';
    } else {
        rightSpace.classList.remove('hidden');
        startOverButton.style.display = 'none';
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
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImage();
    }
}

// Function to go to the start
function goToStart() {
    currentIndex = 0;
    updateImage();
}

// Attach event listeners to arrows and button
document.querySelector('.left-space').addEventListener('click', prevImage);
document.querySelector('.right-space').addEventListener('click', nextImage);
document.getElementById('start-over').addEventListener('click', goToStart);

// Initial setup
updateImage(); // Initialize with the first image
