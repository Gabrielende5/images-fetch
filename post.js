const form = document.getElementById("my-form");
form.addEventListener("submit",handleSubmit);
var colorCard = 'Card-de-envio';
var textCard =''
function handleSubmit(event) {
  event.preventDefault();
  const data = new FormData();
  data.append("post[title]",event.target.title.value);
  data.append("post[image]",event.target.image.files[0]);
  submitToAPI(data);
}
const miniCard = document.getElementById("Cards");
async function submitToAPI(data){
  try {
    var response = await fetch("http:/localhost:3000/posts",{
      method: "POST",
      body: data,
    })
    var json = await response.json()
    const latestPost = document.getElementById("latest-post");
    latestPost.innerHTML = `<img class="LatestImagem" src="${json.image_url}" alt="ultima Imagem" />`;
    var colorCard = 'Card-de-envio';
    var textCard= 'Enviado'
    endAnimation()
  } catch (error) {
    var colorCard = 'Card-de-erro';
    var textCard = "Erro";
    endAnimation()
  }
  miniCard.innerHTML = `<div id="card" class='${colorCard}'> ${textCard}</div>`  
  
  endAnimation()
}
function endAnimation(){
  setTimeout(()=>{
    const card = document.getElementById("card");
    card.style.opacity = 0;
  },2000)
}