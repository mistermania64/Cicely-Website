const imageContainer = document.getElementById('image-container');
const fullscreenImage = document.getElementById('fullscreen-image');
let offsetX = 0;
let offsetY = 0;

//Open fullscreen on any image click
const thumbnailImages = document.querySelectorAll('.thumbnail-image')
thumbnailImages.forEach(image => {
    image.addEventListener('click', function() {
        openFullScreen(this.src); //Pass the clicked image's src
    });
});

// Open image in fullscreen
function openFullScreen(imagePath)
{
    fullscreenImage.src=imagePath;
    imageContainer.style.visibility = 'visible'; // Display fullscreen container
    document.body.style.overflow = 'hidden'; //Prevent scrolling on document body
}

function closeFullScreen()
{
    imageContainer.style.visibility = 'hidden'; //Hide fullscreen container
    document.body.style.overflow = ''; //Re-enable body scrolling
}

//Add arrow key navigation functionality
document.addEventListener('keydown', function(event)
{
    if (imageContainer.style.visibility === 'visible') {
        const step = 50; // Amount of pixels to move with each key press

        // Arrow keys: left, up, right, down
        if (event.key === 'ArrowLeft' || event.key === "a" || event.key === "A") {
            offsetX += step;
        } else if (event.key === 'ArrowRight' || event.key === "d" || event.key === "D") {
            offsetX -= step;
        } else if (event.key === 'ArrowUp' || event.key === "w" || event.key === "W") {
            offsetY += step;
        } else if (event.key === 'ArrowDown' || event.key === "s" || event.key === "S") {
            offsetY -= step;
        }

        // Apply the new offset to move the image
        fullscreenImage.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }
});

//Close fullscreen when ESC is presssed
document.addEventListener('keydown', function(event) 
{
    if (event.key === 'Escape') {
        closeFullScreen();
    }
});