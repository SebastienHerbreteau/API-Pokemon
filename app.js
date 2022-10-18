//---------------------------------------------Avertissement construction en cours----------------------------
// let onoff = document.querySelector(".onoff");
let avertissement = document.querySelector(".avertissement");

// onoff.addEventListener("click",()=>{
//   window.open("inscription.php")
  
// })

avertissement.addEventListener("click",()=>{
  console.log("hello")
  avertissement.style.display = "none";
  
})





//--------------------------------------------------Fenêtre MODALE---------------------------------------------------

function fetchPokemon(id){
   
  fetch(`https://pokebuildapi.fr/api/v1/pokemon/${id}`)
        .then((response) => response.json())
        .then((pokemon) => {
              let importation = document.querySelector(".importation");

              importation.innerHTML = 
          `<div class="specModal">
              <div class="typeModal">${type(pokemon)}</div>
              <div class="spec">
                  <div class="HP">HP : ${pokemon.stats.HP}</div>
                  <div class="attaque">Attaque : ${pokemon.stats.attack}</div>
                  <div class="defense">Défense : ${pokemon.stats.defense}</div>
                  <div class="specialAttaque">Attaque spéc. : ${pokemon.stats.special_attack}</div>
                  <div class="specialDefense">Défense spéc. : ${pokemon.stats.special_defense}</div>
                  <div class="vitesse">Vitesse : ${pokemon.stats.speed}</div>
              </div>
              <div class="res"> 
                  <div class="immunise ff">${immunise(pokemon)}</div>
                  <div class="tresResistant ff">${tresResistant(pokemon)}</div>
                  <div class="resistant ff">${resistant(pokemon)}</div>
                  <div class="vulnerable ff">${vulnerable(pokemon)}</div>
                  <div class="tresVulnerable ff">${tresVulnerable(pokemon)}</div>
              </div>
              <img class="imgPokeModal" id="ipm" src="assets/pokemons/${pokemon.id}.webp" alt="image de ${pokemon.name}">
              <h2 class="h2Modal">${pokemon.name}</h2>
              <div class="id"><p>#${pokemon.id}</p></div>
             
          </div>`
}
        )}

function type(pokemon) {
  if (pokemon.apiTypes[1] === undefined) {
    return `<div class="type1"><img class="typeImage" src="${pokemon.apiTypes[0].image}" alt="image de ${pokemon.apiTypes[0].name}"/>
                <p>${pokemon.apiTypes[0].name}</p></div>`;
  } else {
    return `<div class="type2"><img class="typeImage" src="${pokemon.apiTypes[1].image}" alt="image de ${pokemon.apiTypes[1].name}"/>
                <p>${pokemon.apiTypes[1].name}</p></div>
                <div class="type1"><img class="typeImage" src="${pokemon.apiTypes[0].image}" alt="image de ${pokemon.apiTypes[0].name}"/>
                <p>${pokemon.apiTypes[0].name}</p></div>`;
  }
}

function immunise(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "immune") {
      recupDamage = `<span><p>${recupName} : </p><span class="gold">Immunisé</span></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}

function tresResistant(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "twice_resistant") {
      recupDamage = `<span><p>${recupName} : </p><span class="silver">Très résistant</span></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}

function resistant(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "resistant") {
      recupDamage = `<span><p>${recupName} : </p><span class="vert">Résistant</span></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}

function vulnerable(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "vulnerable") {
      recupDamage = `<span><p>${recupName} : </p><span class="orange">Vulnérable</span></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}

function tresVulnerable(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation === "twice_vulnerable") {
      recupDamage = `<span><p>${recupName} : </p><span class="rouge">Très vulnérable</span></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}
//--------------------------------------------------Comportement HEADER---------------------------------------------------
let lastScroll = 0;
let header = document.querySelector("header")

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    header.style.top = 0;
  } else {
    header.style.top = "-350px";
  }

  lastScroll = window.scrollY;
});
 

//-----------------------------------------Comportement modal après click sur resultat recherche---------------------------------------------------
window.onclick = function (e) {
  if (e.target === close || e.target.id === "ipm") {
    modal.classList.remove("modalActive");
  }
};

let cards = document.querySelectorAll(".card");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close");
let right = document.querySelector(".right");
let left = document.querySelector(".left");

  cards.forEach((card) => {
  card.addEventListener("click", () => {
    let importation = document.querySelector(".importation")
    importation.textContent = "";
    modal.classList.add("modalActive");
    let id = card.firstElementChild.textContent; 
    fetchPokemon(id);

    right.addEventListener("click",()=>{
      id++; 
      fetchPokemon(id)
      })

    left.addEventListener("click",()=>{
      id--;
      fetchPokemon(id)
      })

    window.addEventListener("keydown",(e)=>{
      if (e.code === "ArrowRight"){
      id++;
      fetchPokemon(id)
      }
      })
    

    window.addEventListener("keydown",(e)=>{
      if (e.code === "ArrowLeft"){
      id--;
      fetchPokemon(id)
      }
      })
}); }) 