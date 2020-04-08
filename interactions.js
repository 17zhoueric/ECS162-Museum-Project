let leftArrowButtonListener = document.getElementById("leftArrow");
leftArrowButtonListener.addEventListener("click", slideLeft);

function slideLeft() {
    // change pageIndex at top-left
    let pageIndex = document.getElementById("pageIndex");
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
    // change artCaption at bottom
    let artCaption = document.getElementById("artCaption");
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
    // change picture
    let fabric = document.getElementsByClassName("fabric");
    let fatherPortrait = document.getElementsByClassName("fatherPortrait");
    let roomCube = document.getElementsByClassName("roomCube");
    let openAfterDeath = document.getElementsByClassName("openAfterDeath");
    if (pageIndex.textContent[0] == "2") {
        fabric.style.display = "none";
        fatherPortrait.style.display;
        roomCube.style.display = "none";
        openAfterDeath.style.display = "none";
    }
    else if (pageIndex.textContent[0] == "3") {
        
    }
    else if (pageIndex.textContent[0] == "4") {
        
    }
    else {
        
    }
}