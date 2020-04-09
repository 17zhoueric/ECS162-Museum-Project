/************************
        SLIDESHOW
*************************/

// initialization
var currentSlide = 1;
changeSlides(currentSlide);

// arrows
var leftArrowButtonListener = document.getElementById("leftArrow");
leftArrowButtonListener.addEventListener("click", function() {changeSlides(currentSlide -= 1);});
var rightArrowButtonListener = document.getElementById("rightArrow");
rightArrowButtonListener.addEventListener("click", function() {changeSlides(currentSlide += 1);});

// thumbnail
var button1Listener = document.getElementById("circleButton1");
button1Listener.addEventListener("click", function(){changeSlides(currentSlide = 1);});
var button2Listener = document.getElementById("circleButton2");
button2Listener.addEventListener("click", function(){changeSlides(currentSlide = 2);});
var button3Listener = document.getElementById("circleButton3");
button3Listener.addEventListener("click", function(){changeSlides(currentSlide = 3);});
var button4Listener = document.getElementById("circleButton4");
button4Listener.addEventListener("click", function(){changeSlides(currentSlide = 4);});

function changeSlides(n) {
    // get slides + buttons
    var slides = document.getElementsByClassName("slides");
    var buttons = document.getElementsByClassName("circleButtons");
    // loop around if neccessary
    if (n > slides.length) 
        currentSlide = 1;
    if (n < 1) 
        currentSlide = slides.length;
    // display + hide slides; change button opacity
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        // buttons[i].style.opacity = 0.3;
        buttons[i].style.color = "darkgray";
    }
    slides[currentSlide - 1].style.display = "block";
    // buttons[currentSlide - 1].style.opacity = 0.6;
    buttons[currentSlide - 1].style.color = "#636363";

}

/**********************
        COUNTER
***********************/

function countdown() {
    let finishTime = new Date("May 10, 2020 17:00:00").getTime();
    let today = new Date().getTime();
    let countingTime = (finishTime - today)/1000;
    countingTime = Math.floor(countingTime);
    var countListener = document.getElementById("counter");
    countListener.textContent = countingTime.toLocaleString();
}

countdown()
setInterval(countdown, 1000);
