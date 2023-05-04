const body = document.getElementById("body");
body.classList.add("body-dark");
function darkTheme(){
    body.classList.add("body-dark");
    body.classList.remove("body-light");
}
function lightTheme(){
    body.classList.add("body-light");
    body.classList.remove("body-dark");
}