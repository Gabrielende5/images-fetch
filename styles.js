const body = document.getElementById("body");
body.classList.add("body-dark");
function darkTheme(){
    body.classList.add("body-dark");
    body.classList.remove("body-light");
    body.classList.remove("body-cyan");
}
function lightTheme(){
    body.classList.add("body-light");
    body.classList.remove("body-dark");
    body.classList.remove("body-cyan");
}
function cyanTheme(){
    body.classList.add("body-cyan");
    body.classList.remove("body-light");
    body.classList.remove("body-dark");
}
const fileInput = document.getElementById("image");
const imageLabel = document.getElementById("imageLabel");

fileInput.addEventListener("change", function() {
  if (fileInput.files.length > 0 && fileInput.files[0].type.startsWith("image/")) {
    // A file has been selected and it's an image
    const reader = new FileReader();
    reader.onload = function(event) {
      imageLabel.innerHTML = ''
      // Set the background-image of the imageLabel to the selected image
      imageLabel.style.backgroundImage = `url(${event.target.result})`;
    }

    reader.readAsDataURL(fileInput.files[0]);
  } else {
    // No file selected or the selected file is not an image
    imageLabel.style.backgroundImage = "";
    
    imageLabel.innerHTML = 'Envie aqui sua imagem'
  }
});