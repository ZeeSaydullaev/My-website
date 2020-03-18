
function changeImg() {
    let image = document.getElementById("imgChange");


    if (image.getAttribute('src') == ("Homework/1.png")) {
        image.src = "Homework/2.png";
    }
    else {
        image.src = "Homework/1.png";
    }
}
