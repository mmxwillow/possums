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

const btn1 = document.querySelector(".txt-size");
btn1.addEventListener('click', function(){
    var article = document.getElementsByTagName("article");
    article[0].classList.toggle("bigger-text");
})


const btn2 = document.querySelector(".dark-mode");

const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
  btn2.innerText="light_mode";
}

btn2.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");

  let theme = "light";
  btn2.innerText="dark_mode";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
    btn2.innerText="light_mode";
  }
  
  localStorage.setItem("theme", theme);
});

