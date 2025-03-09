// Gallery is a little more complicated than dark mode. The basic function is that we want a bunch of thumbnails on the page we can click on to bring up larger images. This allows us to reduce the amount of data that gets transfered when the page loads, letting the user opt into looking at larger, more data-intensive images.

// First we get refrences to the two things we need - the div that contains the thumbnails, and a container that will show the full size image when we click on the thumbnail.
let $gallery = document.getElementById('gallery')
let $imgViewer = document.getElementById('imgViewer')

// First, we're adding an event listener to the gallery div. Event listeners run some code when a given event is detected, in this case, when we click anwywhere in the gallery. They look complicated, but that's because we're writing the function it's going to execute directly into the event listener. The basic form is this: ELEMENT.addEventListener('EVENT', FUNCTION)

// (...) => {...}
// This is a shorthand for writing a function. (...) contains any parameters that will be fed into the function. {...} contains the code that will run when the function executes. This type of function, which is being passed into an eventListener directly is called an anonymous function because we're not giving it a name like functions normally have: function SOMENAME(...) {...}  
$gallery.addEventListener('click', (event) => {
    // console.log(event.target.tagName)

    // First, because the event listener is on the *container* and not the thumbnail images directly, we have to check we're actually clicking on an image. We could be clicking on the gutter between images, so this check is very important. Our code will assume we're actually dealing with an image.
    // event is a parameter that the event listener provides that contains all the contextual information about the event that triggered the listener. event.target is a reference to the element that triggered the event - in this case, the thing the cursor was directly clicking on. If we check its tagname, we can find out its an image. 
    // Beware:  img is uppercase here, despite HTML being lowercase basically everywhere else! 
    if (event.target.tagName == "IMG") {
        // Next, we need to show our imgViewer. We have a 'hidden' class on it when the page loads to hide it, so we're just taking that off. 
        $imgViewer.classList.remove('hidden')

        // next, we'll find out what the filename for the full-sized image is. We're putting this in as a data attribute in the HTML, so this is very easy to access. dataset contains any data attributes applied on the element in the HTML. We put this a variable. 
        let full = event.target.dataset.full_image
        
        // Finally, we're inserting a new image into the image viewer HTML. This overrides whatever was in there before, if we happen to be clicking on several thumbnails in sequence. 
        $imgViewer.innerHTML = `<img src='images/${full}'>`
    }
})

// The last thing we're doing is adding an event listener on the imgViewer itself. If we ever click on it, we want to hide it again.
$imgViewer.addEventListener('click', (event) => {
    $imgViewer.classList.add('hidden')
})