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

fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/200")
  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <img class="imgPoke" src="${pokemon.image}">
            <h2 class="nom">${pokemon.name}</h2>
            <h3>#${pokemon.id}</h3>
            
            <div class="specModal">

                <div class="typeModal">${type(pokemon)}
                </div>

                <div class="spec">

                        <div class="HP">HP : ${pokemon.stats.HP}
                        </div>

                        <div class="attaque">Attaque : ${pokemon.stats.attack}
                        </div>

                        <div class="defense">Défense : ${pokemon.stats.defense}
                        </div>

                        <div class="specialAttaque">Attaque spéciale : ${
                              pokemon.stats.special_attack
                            }
                        </div>

                        <div class="specialDefense">Défense spéciale : ${
                              pokemon.stats.special_defense
                            }
                        </div>

                        <div class="vitesse">Vitesse : ${pokemon.stats.speed}
                        </div>

                </div>

                <div class="res"> 
                  ${resistance(pokemon)}
                </div>
                
                <h2 class="h2Modal">${pokemon.name}</h2>
                
            </div>
        </div>
        `;
    } //--------------------------------------------------------------------------fin de boucle-----------------------------------------------------
    //----------------------------------------------------------------------modal----------------------------------------------------------------
    let cards = document.querySelectorAll(".card");
    let modal = document.querySelector(".modal");
    let imgModal = document.querySelector(".modal>img");
    let importModal = document.querySelector(".import");
    let close = document.querySelector(".close");

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        modal.classList.add("modalActive");
        imgModal.setAttribute(
          "src",
          card.firstElementChild.getAttribute("src")
        );
        importModal.innerHTML = card.lastElementChild.outerHTML;
      });
    });

    window.onclick = function (e) {
      if (e.target == modal || e.target == close || e.target == imgModal) {
        modal.classList.remove("modalActive");
      }
    };

    //------------------------------------------------------------------fin modal--------------------------------------------------------------
  }); //-----------------------------------------------------------------------------fin de then---------------------------------------------------------

function type(pokemon) {
  if (pokemon.apiTypes[1] == undefined) {
    return `<div class="type1"><img class="typeImage" src="${pokemon.apiTypes[0].image}"/>
                <p>${pokemon.apiTypes[0].name}</p></div>`;
  } else {
    return `<div class="type1"><img class="typeImage" src="${pokemon.apiTypes[0].image}"/>
                <p>${pokemon.apiTypes[0].name}</p></div> 

            <div class="type2"><img class="typeImage" src="${pokemon.apiTypes[1].image}"/>
                <p>${pokemon.apiTypes[1].name}</p></div>`;
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

function resistance(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (!pokeDam.damage_relation.includes("neutral")) {
      recup += `<p>${recupName} : ${recupDamage}</p>`;
    }
  }
  return recup;
}
