let $gallery = document.getElementById('gallery')
let $imgViewer = document.getElementById('imgViewer')

$gallery.addEventListener('click', (event) => {
    // console.log(event.target.tagName)

    if (event.target.tagName == "IMG") {
        $imgViewer.classList.remove('hidden')

        let full = event.target.dataset.full_image
        
        $imgViewer.innerHTML = `<img src='images/${full}'>`
    }
})

$imgViewer.addEventListener('click', (event) => {
    $imgViewer.classList.add('hidden')
})