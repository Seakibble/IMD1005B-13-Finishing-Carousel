// Carousel is the most complicated of our examples. This will be a box that displays several images, cycling through them in sequence automatically every few seconds. There will be buttons on each side that let us move back and forth.

// First we get a reference to our carousel.
let $carousel = document.getElementById('carousel')

// We'll need to keep track of the slide we're on. We'll use this index variable to do that.
let index = 0

// This function displays whatever slide our index is set to.
function SetSlide() {
    // First, we get a reference to all the images in our carousel. querySelector() lets us look for a result by providing a CSS selector. It will return the first element that matches the selector. We're calling it on $carousel, so it will only search $carousel. The result the querySelector will find will be the div though, not the images. So we have to specify that we want the *children* of that div - this will return an array of all the images in the carousel.
    let $images = $carousel.querySelector('.images').children
    
    // This conditional block exists to make sure that the index can't end up as a number beyond the bounds of the array. The array indices will range from 0 to the number of images - 1. So if it's less than 0 we need to wrap back around to the last image's index, and vice versa. Otherwise we'll end up trying to show an image that doesn't exist! 
    if (index >= $images.length) {
        index = 0
    } else if (index < 0) {
        index = $images.length - 1
    }

    // We'll have a simple for loop that cycles through the images...
    for (let i = 0; i < $images.length; i++) {
        if (i == index) {
            // If the image we're on in the loop is the same as our index variable, then we'll show it...  
            $images[i].classList.remove('hidden')
        } else {
            // ...otherwise we'll hide it. This will effectively hide all the images *except* the one that's currently active.
            $images[i].classList.add('hidden')
        }
    }
}

// These two functions let us move back and forth in the carousel and are triggered by the buttons in the HTML as onclick functions. In both cases, we adjust the index in the direction we want, then we update the current slide by calling SetSlide(). We have an interval set up below to advance the slides forwards automatically, so we have to clear it - otherwise the slideshow may advance immediately after the user switches slides, which would not be a pleasant experience. If the button is clicked, the slides should stay put for a bit! Finally, we call our StartSlideshow() function to start the auto cycling from the beginning.
function ReverseSlide() {
    index--
    SetSlide()
    clearInterval(slideInterval)
    StartSlideshow()
}
function AdvanceSlide() {
    index++
    SetSlide()
    clearInterval(slideInterval)
    StartSlideshow()
}

// slideInterval is the variable that will contain the reference to the interval - the thing that automatically advances the slides. We'll potentially need to cancel it, so we need the reference.
let slideInterval
// We're calling the slideshow function outlined below once the page loads. Otherwise the slideshow won't advance until the buttons are pressed.
StartSlideshow()

// This function sets up an interval - this will call a given function every so many milliseconds. It returns an id, which we're storing in our slideInterval variable, so we can cancel this interval if necessary.
function StartSlideshow() {
    slideInterval = setInterval(()=> {
        index++
        SetSlide()
    }, 5000)
}