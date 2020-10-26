window.onload = function () {


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




    }