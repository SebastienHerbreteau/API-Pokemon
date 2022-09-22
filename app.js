let typeCouleur = {
  Normal: "background-image: url('assets/normal.png')",
  Combat: "background-image: url('assets/combat.png')",
  Vol: "background-image: url('assets/vol.png')",
  Poison: "background-image: url('assets/poison.png')",
  Sol: "background-image: url('assets/sol.png')",
  Roche: "background-image: url('assets/roche.png')",
  Insecte: "background-image: url('assets/insecte.png')",
  Spectre: "background-image: url('assets/spectre.png')",
  Acier: "background-image: url('assets/acier.png')",
  Feu: "background-image: url('assets/feu.png')",
  Eau: "background-image: url('assets/eau.png')",
  Plante: "background-image: url('assets/plante.png')",
  Électrik: "background-image: url('assets/electrik.png')",
  Psy: "background-image: url('assets/psy.png')",
  Glace: "background-image: url('assets/glace.png')",
  Dragon: "background-image: url('assets/dragon.png')",
  Ténèbres: "background-image: url('assets/tenebres.png')",
  Fée: "background-image: url('assets/fee.png')",
};

fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/50")
  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");

      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
          <img class="imgPoke" src="${pokemon.image}">
          <h2>${pokemon.name}</h2>
          <h3>#${pokemon.id}</h3>
          <div class="type">${type(pokemon)}
          </div>
          <div class="specAll">
          <div class="spec HP">HP ${pokemon.stats.HP}
          </div>
          <div class="spec specialAttaquetaque">Attaque ${pokemon.stats.attack}
          </div>
          <div class="spec specialAttaquefense">Défense ${pokemon.stats.defense}
          </div>
          <div class="spec specialAttaque">Attaque spéciale ${
            pokemon.stats.special_attack
          }
          </div>
          <div class="spec specialDefense">Défense spéciale ${
            pokemon.stats.special_defense
          }
          </div>
          <div class="spec vitesse">Vitesse ${pokemon.stats.speed}
          </div>
          </div>
        </div>
        `;
    } //--------------------------------------------------------------------------fin de boucle-----------------------------------------------------

    //----------------------------------------------------------------------modal----------------------------------------------------------------
    let cards = document.querySelectorAll(".card");
    let modal = document.querySelector(".modal");
    let imgModal = document.querySelector(".modal>img");
    let spec = document.querySelector(".spec");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        console.log(card.lastElementChild);
        modal.classList.add("modalActive");
        imgModal.setAttribute(
          "src",
          card.firstElementChild.getAttribute("src")
        );
        spec.innerHTML = card.lastElementChild;
      });
    });

    window.onclick = function (e) {
      if (e.target == modal || e.target == imgModal) {
        modal.classList.remove("modalActive");
      }
    };

    //------------------------------------------------------------------fin modal--------------------------------------------------------------
  }); //-----------------------------------------------------------------------------fin de then---------------------------------------------------------

function type(pokemon) {
  if (pokemon.apiTypes[1] == undefined) {
    return `<img class="typeImage" src="${pokemon.apiTypes[0].image}"/>
                <p>${pokemon.apiTypes[0].name}</p>`;
  } else {
    return `<img class="typeImage" src="${pokemon.apiTypes[0].image}"/>
                <p>${pokemon.apiTypes[0].name}</p> <img class="typeImage" src="${pokemon.apiTypes[1].image}"/>
                <p>${pokemon.apiTypes[1].name}</p>`;
  }
}
//----------pokemon correspond à l'élément destructuré de pokebase--------------------------
function bgType1(pokemon) {
  for (const [key, value] of Object.entries(typeCouleur)) {
    //--------toutes les entrées de l'objet (typeCouleur), sont tranformées en tableau [clé,valeur]
    if (pokemon.apiTypes[1] == undefined) {
      if (pokemon.apiTypes[0].name == [key]) return [value];
    } else if (pokemon.apiTypes[1] !== undefined) {
      if (pokemon.apiTypes[1].name == [key]) return [value];
    }
  }
}
