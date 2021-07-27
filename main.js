// 1st section
function railwaySlider(){
    let images = [
        'images/5.jpg',
        'images/2.jpg',
        'images/4.jpg',
        'images/11.jpg',
        'images/6.jpg',
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

// 2nd section
window.addEventListener('scroll', function(){
    let scrollTop = document.querySelector('html').scrollTop;

    if(scrollTop < 1100 && scrollTop > 300){
        document.querySelector('.line').classList.add('red');
    }
});


let navigation = document.querySelectorAll('.navigation a');
for(let i = 0; i < navigation.length; i++){
	navigation[i].addEventListener('click', function(e) {
		console.log(this.href);
		let href = this.getAttribute('href').slice(1);
		let scrollPoint = document.getElementById(href).offsetTop;
		e.preventDefault();
		scrollDown(scrollPoint);
	})
}


function scrollDown(max){
	let scrollTop = document.querySelector('html').scrollTop;

	if(scrollTop < max){
		setTimeout(() => {
			document.querySelector('html').scrollTop += 5;
			scrollDown(max);
		}, 2);
	}
}