let $carousel = document.getElementById('carousel')

let index = 0

function SetSlide() {
    let $images = $carousel.querySelector('.images').children
    
    if (index >= $images.length) {
        index = 0
    } else if (index < 0) {
        index = $images.length - 1
    }

    for (let i = 0; i < $images.length; i++) {
        if (i == index) {
            $images[i].classList.remove('hidden')
        } else {
            $images[i].classList.add('hidden')
        }
    }
}

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


let slideInterval
StartSlideshow()

function StartSlideshow() {
    slideInterval = setInterval(()=> {
        index++
        SetSlide()
    }, 5000)
}