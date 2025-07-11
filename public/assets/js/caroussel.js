let slideIndexes = [1, 1];  // Initialize indexes for multiple slideshows
showSlides(1, 1);  // Show the first slide of the first slideshow
showSlides(1, 2);  // Show the first slide of the second slideshow

// Next/previous controls
function plusSlides(n, no) {
    showSlides(slideIndexes[no - 1] += n, no);
}

// Thumbnail image controls
function currentSlide(n, no) {
    showSlides(slideIndexes[no - 1] = n, no);
}

function showSlides(n, no) {
    let i;
    let slides = document.getElementsByClassName(no === 1 ? "mySlides" : "mySlides2");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndexes[no - 1] = 1}
    if (n < 1) {slideIndexes[no - 1] = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndexes[no - 1] - 1].style.display = "block";  
    dots[slideIndexes[no - 1] + (no - 1) * 3 - 1].className += " active";  // Adjust dots
}