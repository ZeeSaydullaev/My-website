
function changeImg() {

    console.log(document.getElementById("imgClickAndChange"));
    if (document.getElementById("imgClickAndChange").src == "Homework/1.png") {
        document.getElementById("imgClickAndChange").src = "Homework/2.png";
    }
    else {
        document.getElementById("imgClickAndChange").src = "Homework/1.png";
    }
}
