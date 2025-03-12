// document.getElementById('back-to').addEventListener('click', function(){
// const backTo = document.getElementById('back-to');
// console.log('hello world');
// })

function backTo() {
  window.location.href = "./card.html";
}

const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a6", "#ffcc00"];
let index = 0;

function changeBg() {
  document.body.style.backgroundColor = colors[index];
  index = (index + 1) % colors.length;
}
