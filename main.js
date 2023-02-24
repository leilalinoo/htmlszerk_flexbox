window.addEventListener("load", init);

function init() {
  const tartalomElem = document.getElementById("tartalom");
  console.log(tartalomElem);

  const tartalomElemMaskepp = document.querySelector("#tartalom");
  const tartalomElemMaskepp2 = document.querySelector(".tart");
  const tartalomElemMaskepp3 = document.getElementsByClassName("tart");
  const tartalomElemEz = document.querySelectorAll(".tart");
  console.log(tartalomElemEz);
  let szoveg = "helloszia";
  console.log((tartalomElemEz[1].innerHTML = "<p>" + szoveg + "</p>"));

  let lista = ["alma", "banán", "körte", "barack"];
  const eleresiutLista = ["alma.jpg", "alma.jpg", "alma.jpg","alma.jpg","alma.jpg","alma.jpg","alma.jpg"];
  const articleElem = document.getElementById("arr");
  kiiras(lista, tartalomElemEz);
  kep(eleresiutLista, articleElem);
}

function kiiras(lista, tartalomElemEz) {
  let szoveg = "<h1>gyümik:</h1>";
  szoveg += "<ul>";
  for (let index = 0; index < lista.length; index++) {
    szoveg += "<li>" + lista[index] + "</li>";
  }
  szoveg += "</ul>";
  console.log(szoveg)
  tartalomElemEz[0].innerHTML = szoveg;
}

function kep(eleresiutLista, articleElem) {
    let szoveg = "";
    
    for (let index = 0; index < eleresiutLista.length; index++) {
        szoveg+=`<div>
        <img src="${eleresiutLista[index]}" alt="Almaaaaaaaaaaaaaaaa">
    </div>`
    }
    
    articleElem.innerHTML = szoveg;
}
