/***********************
        GLOBALS
************************/

var pageIndex = document.getElementById("pageIndex");

/***********************
        COUNTER
************************/
//document.getElementsById("counter").textContent = "hello";

function countdown() {
    // calculate correct counting time
    let finishTime = new Date("May 10, 2020 17:00:00").getTime();
    let today = new Date().getTime();
    let countingTime = (finishTime - today)/1000;
    countingTime = Math.floor(countingTime);
    // display
    document.getElementsById("counter").textContent = countingTime.toLocaleString;
}

setInterval(countdown, 1000);

/*************************
        THUMBNAIL
**************************/
let button1Listener = document.getElementById("circleButton1");
button1Listener.addEventListener("click", thumbnailChange1);

let button2Listener = document.getElementById("circleButton2");
button2Listener.addEventListener("click", thumbnailChange2);

let button3Listener = document.getElementById("circleButton3");
button3Listener.addEventListener("click", thumbnailChange3);

let button4Listener = document.getElementById("circleButton4");
button4Listener.addEventListener("click", thumbnailChange4);

function thumbnailChange1() {
    // change pageIndex
    pageIndex.textContent = "1 / 4";
    buttonChange();
    artCaptionChange();
    pictureChange();
}

function thumbnailChange2() {
    // change pageIndex
    pageIndex.textContent = "2 / 4";
    buttonChange();
    artCaptionChange();
    pictureChange();
}

function thumbnailChange3() {
    // change pageIndex
    pageIndex.textContent = "3 / 4";
    buttonChange();
    artCaptionChange();
    pictureChange();
}

function thumbnailChange4() {
    // change pageIndex
    pageIndex.textContent = "4 / 4";
    buttonChange();
    artCaptionChange();
}

/*************************
        SLIDESHOW
**************************/

let leftArrowButtonListener = document.getElementById("leftArrow");
leftArrowButtonListener.addEventListener("click", slideLeft);

let rightArrowButtonListener = document.getElementById("rightArrow");
rightArrowButtonListener.addEventListener("click", slideRight);

function buttonChange() {
    var button1 = document.getElementById("circleButton1");
    var button2 = document.getElementById("circleButton2");
    var button3 = document.getElementById("circleButton3");
    var button4 = document.getElementById("circleButton4");
    if (pageIndex.textContent[0] == "2") {
        button1.style.opacity = 0.3;
        button2.style.opacity = 0.6;
        button3.style.opacity = 0.3;
        button4.style.opacity = 0.3;    
    }
    else if (pageIndex.textContent[0] == "3") {
        button1.style.opacity = 0.3;
        button2.style.opacity = 0.3;
        button3.style.opacity = 0.6;
        button4.style.opacity = 0.3; 
    }
    else if (pageIndex.textContent[0] == "4") {
        button1.style.opacity = 0.3;
        button2.style.opacity = 0.3;
        button3.style.opacity = 0.3;
        button4.style.opacity = 0.6;  
    }
    else {
        button1.style.opacity = 0.6;
        button2.style.opacity = 0.3;
        button3.style.opacity = 0.3;
        button4.style.opacity = 0.3; 
    }
}

function artCaptionChange() {
    var artCaption = document.getElementById("artCaption");
    if (pageIndex.textContent[0] == "2") {
        artCaption.textContent = "Stephan Kaltenbach, Portrait of My Father, 1972-79. Acrylic on canvas, 114 x 170 3/4 inches.";
        artCaption.style.textAlign = "center";
    }
    else if (pageIndex.textContent[0] == "3") {
        artCaption.textContent = "Stephan Kaltenbach, Room Cube, 1967. Blueprint, 18 x 24 inches, edition of 10.";
        artCaption.style.textAlign = "center";
    }
    else if (pageIndex.textContent[0] == "4") {
        artCaption.textContent = "Stephan Kaltenbach, OPEN AFTER MY DEATH, 1970. Mild steel, engraved, with unknown contents, 3 x 6 x 3 inches.";
        artCaption.style.textAlign = "center";
    }
    else {
        artCaption.textContent = "Stephan Kaltenbach and guests, MODERN DRAPERY, 2020. Felt Fabric, 45 x 60 inches.";
        artCaption.style.textAlign = "center";
    }
}

function pageIndexChangeLeft() {
    if (pageIndex.textContent[0] == "2") {
        pageIndex.textContent = "1 / 4";
    }
    else if (pageIndex.textContent[0] == "3") {
        pageIndex.textContent = "2 / 4";
    }
    else if (pageIndex.textContent[0] == "4") {
        pageIndex.textContent = "3 / 4";
    }
    else {
        pageIndex.textContent = "4 / 4";
    }
}

function pageIndexChangeRight() {
    if (pageIndex.textContent[0] == "2") {
        pageIndex.textContent = "3 / 4";
    }
    else if (pageIndex.textContent[0] == "3") {
        pageIndex.textContent = "4 / 4";
    }
    else if (pageIndex.textContent[0] == "4") {
        pageIndex.textContent = "1 / 4";
    }
    else {
        pageIndex.textContent = "2 / 4";
    }
}

function pictureChange() {
    var fabric = document.getElementsByClassName("fabric");
    var fatherPortrait = document.getElementsByClassName("fatherPortrait");
    var roomCube = document.getElementsByClassName("roomCube");
    var openAfterDeath = document.getElementsByClassName("openAfterDeath");
    if (pageIndex.textContent[0] == "2") {
        fabric.style.display = "none";
        fatherPortrait.style.display;
        roomCube.style.display = "none";
        openAfterDeath.style.display = "none";
    }
    else if (pageIndex.textContent[0] == "3") {
        fabric.style.display = "none";
        fatherPortrait.style.display = "none";
        roomCube.style.display;
        openAfterDeath.style.display = "none";
    }
    else if (pageIndex.textContent[0] == "4") {
        fabric.style.display = "none";
        fatherPortrait.style.display = "none";
        roomCube.style.display = "none";
        openAfterDeath.style.display;
    }
    else {
        fabric.style.display;
        fatherPortrait.style.display = "none";
        roomCube.style.display = "none";
        openAfterDeath.style.display = "none";
    }
}

function slideLeft() {
    // change pageIndex at top-left
    pageIndexChangeLeft();
    // change artCaption at bottom
    artCaptionChange();
    // change opacity of button
    buttonChange();
    // change picture
    pictureChange();
}

function slideRight() {
    // change pageIndex at top-left
    pageIndexChangeRight();
    // change artCaption at bottom
    artCaptionChange();
    // change opacity of button
    buttonChange();
    // change picture
    pictureChange();
}