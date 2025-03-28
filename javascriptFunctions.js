function showHidden(id) {
    if (document.getElementById(id).style.display == 'none') { 
            document.getElementById(id).style.display = 'block';
    } else {
        document.getElementById(id).style.display = 'none';
    }
}

let images = ["img/Illustration/good-morning-neon.JPG", "img/Illustration/good-morning-purple.JPG", "img/Illustration/good-morning-red.JPG"]; //Images array

const imageSlider = document.querySelector('.image-viewer'); //Image Viewer container

let currentIndex = 0; //Current index of images array

function updateImage() 
{
    const viewerImage = document.getElementById('viewerImage'); //Image in viewer container
    viewerImage.src = images[currentIndex]; //Update source of image to fill container

    // imageSlider.style.transform = `translateX(-${currentIndex * 100}%)`; //Slide image based on if index is 0 or positive

    // imageSlider.addEventListener('transitionend', () => {
    //     viewerImage.src = images[currentIndex]; //Update source of image to fill container once animation completes
    // })
    
}

function prevImage() 
{
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

function nextImage() 
{
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
}

