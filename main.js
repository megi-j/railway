function railwaySlider(){
    let images = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
    ];
    let currentSlideIndex = 0;
    setTimeout(next, 5000);
    createSlide();
    function createSlide() {
        let slide = document.querySelector('.slide');
        setBackgroundImage(slide);
    }
    function next() {
        let nextSlideIndex = currentSlideIndex + 1;
        if(nextSlideIndex > images.length - 1) nextSlideIndex = 0;
        setActiveSlide(nextSlideIndex);
        
    }
    function setActiveSlide(newIndex) {
        let slide = document.querySelector('#slider .slide');
        slide.classList.add('out');

        setTimeout(function() {
            currentSlideIndex = newIndex;
            setBackgroundImage(slide);
            setTimeout(next, 5000);

            slide.classList.remove('out');
        }, 500);
    }
    function setBackgroundImage(slide) {
        slide.style.backgroundImage = 'url(' + images[currentSlideIndex] + ')';
    }
}
railwaySlider();
