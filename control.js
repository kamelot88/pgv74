window.onload = function () {

//Начало скрипта выпадающего списка билетов
let select = document.querySelector("#first > form > select");
let articles = document.querySelectorAll('.bilet');
for (let article of articles) {
  article.classList.add('hidden');
}

  select.onchange = function () {
        for (let article of articles) {
          if (article.dataset.number !== select.value) {
            article.classList.add('hidden');
          } else {
            article.classList.remove('hidden');
          }
        }
      };


// Начало скрипта динамического изменения шрифта

let pixeles = document.querySelector("#main > label > output");
let sizeSetting = document.querySelector("#main > label > input");
let bilets = document.querySelectorAll("#information > div");
sizeSetting.onchange = function() {
  pixeles.textContent = sizeSetting.value;
  for(bilet of bilets) {
    bilet.style.fontSize = sizeSetting.value + 'px';
  }
}


  



  





}