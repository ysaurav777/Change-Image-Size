let imageElement = document.getElementById("image");
let originalImageWidth = "200px";
imageElement.style.width = originalImageWidth;
let current = 200;
let warning = document.getElementById("warningMessage");
let rewidth = document.getElementById("imageWidth");

function increase() {
    if (current < 300) {
        warning.textContent = "";
        let newwidth = current + 5;
        current = newwidth;
        rewidth.textContent = current + "px";
        imageElement.style.width = current + "px";
    } else {
        warning.textContent = "Too big. Decrease the size of the Image.";
    }
}


function decrease() {
    if (current > 100) {
        warning.textContent = "";
        let newwidth = current - 5;
        current = newwidth;
        rewidth.textContent = current + "px";
        imageElement.style.width = current + "px";
    } else {
        warning.textContent = "Can't Visible. Increase the size of the Image.";
    }
}