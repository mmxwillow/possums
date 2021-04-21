let whichPhoto = 1;

function changePhoto(i) {
    whichPhoto += +i;

    if (whichPhoto == 5)
        whichPhoto = 1;
    else if (whichPhoto == 0)
        whichPhoto = 4;

    switch (whichPhoto) {
        case 1:
            document.getElementById("image").setAttribute("src", "1.jpg");
            break;
        case 2:
            document.getElementById("image").setAttribute("src", "2.jpg");
            break;
        case 3:
            document.getElementById("image").setAttribute("src", "3.jpg");
            break;
        case 4:
            document.getElementById("image").setAttribute("src", "4.jpg");
            break;
    }
}


function biggerText() {
    var article = document.getElementsByTagName("article");
    article[0].classList.toggle("bigger-text");
}