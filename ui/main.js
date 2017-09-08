console.log('Loaded!');

//Change the value of text on the webapp.
var element = document.getElementById('main-text');

element.innerHTML = "New value added through IMAD code console!";

// Move the image to left.
var img = document.getElementById("madi");
img.onclick = function () {
    madi.style.marginRight = "150px";
};