function upDate(previewPic) {
    var element = document.getElementById("image");
    element.style.backgroundImage = "url('" + previewPic.src + "')";
    element.innerHTML = previewPic.alt;
}

function unDo() {
    var element = document.getElementById("image");
    element.style.backgroundImage = "";
    element.innerHTML = "Hover over an image below to display here.";
}