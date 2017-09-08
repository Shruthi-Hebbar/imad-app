console.log('Loaded!');

//Change the value of text on the webapp.
var element = document.getElementById('main-text');

element.innerHTML = "New value added through IMAD code console!";

// Move the image to left.
var img = document.getElementById("madi");
var marginRight = 0;
function moveLeft () {
    marginRight = marginRight + 1;
    madi.style.marginRight = "px";
}

img.onclick = function () {
    var interval = setInterval(moveLeft, 10);
};