//--------------------------------------------------Variables FOND CARTES---------------------------------------------------

let typeCouleur = {
  Normal: "background-image: url('assets/normal.webp')",
  Combat: "background-image: url('assets/combat.webp')",
  Vol: "background-image: url('assets/vol.webp')",
  Poison: "background-image: url('assets/poison.webp')",
  Sol: "background-image: url('assets/sol.webp')",
  Roche: "background-image: url('assets/roche.webp')",
  Insecte: "background-image: url('assets/insecte.webp')",
  Spectre: "background-image: url('assets/spectre.webp')",
  Acier: "background-image: url('assets/acier.webp')",
  Feu: "background-image: url('assets/feu.webp')",
  Eau: "background-image: url('assets/eau.webp')",
  Plante: "background-image: url('assets/plante.webp')",
  Électrik: "background-image: url('assets/electrik.webp')",
  Psy: "background-image: url('assets/psy.webp')",
  Glace: "background-image: url('assets/glace.webp')",
  Dragon: "background-image: url('assets/dragon.webp')",
  Ténèbres: "background-image: url('assets/tenebres.webp')",
  Fée: "background-image: url('assets/fee.webp')",
};

//--------------------------------------------------FETCH de base---------------------------------------------------
fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <h3 class="idpoke">${pokemon.id}</h3>
            <img class="imgPoke" src="assets/pokemons/${pokemon.id}.webp" alt="image de ${pokemon.name}">
            <h2 class="nom">${pokemon.name}</h2>
            
        </div>
        `;
    }

    window.onclick = function (e) {
      if (e.target == close || e.target.id == "ipm") {
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
          if (e.code == "ArrowRight"){
          id++;
          fetchPokemon(id)
          }
          })
        

        window.addEventListener("keydown",(e)=>{
          if (e.code == "ArrowLeft"){
          id--;
          fetchPokemon(id)
          }
          })
    }); }) 
  }); 


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
  if (pokemon.apiTypes[1] == undefined) {
    return `<div class="type1"><img class="typeImage" src="${pokemon.apiTypes[0].image}" alt="image de ${pokemon.apiTypes[0].name}"/>
                <p>${pokemon.apiTypes[0].name}</p></div>`;
  } else {
    return `<div class="type1"><img class="typeImage" src="${pokemon.apiTypes[0].image}" alt="image de ${pokemon.apiTypes[0].name}"/>
                <p>${pokemon.apiTypes[0].name}</p></div> 

            <div class="type2"><img class="typeImage" src="${pokemon.apiTypes[1].image}" alt="image de ${pokemon.apiTypes[1].name}"/>
                <p>${pokemon.apiTypes[1].name}</p></div>`;
  }
}

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

function immunise(pokemon) {
  let recup = "";

  for (pokeDam of pokemon.apiResistances) {
    let recupName = pokeDam.name;
    let recupDamage = pokeDam.damage_relation;

    if (pokeDam.damage_relation == "immune") {
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

    if (pokeDam.damage_relation == "twice_resistant") {
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

    if (pokeDam.damage_relation == "resistant") {
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

    if (pokeDam.damage_relation == "vulnerable") {
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

    if (pokeDam.damage_relation == "twice_vulnerable") {
      recupDamage = `<span><p>${recupName} : </p><span class="rouge">Très vulnérable</span></span>`;
      recup += recupDamage;
    }
  }
  return recup;
}
//--------------------------------------------------FETCH Menu déroulant GENERATION---------------------------------------------------

let gen1 = document.querySelector(".gen1");
let gen2 = document.querySelector(".gen2");
let gen3 = document.querySelector(".gen3");
let gen4 = document.querySelector(".gen4");
let gen5 = document.querySelector(".gen5");
let gen6 = document.querySelector(".gen6");
let gen7 = document.querySelector(".gen7");
let gen8 = document.querySelector(".gen8");
let main = document.querySelector("main");

gen1.addEventListener("click",()=>{
  main.innerHTML = "";
  generation1()
})
gen2.addEventListener("click",()=>{
  main.innerHTML = "";
  generation2()
})
gen3.addEventListener("click",()=>{
  main.innerHTML = "";
  generation3()
})
gen4.addEventListener("click",()=>{
  main.innerHTML = "";
  generation4()
})
gen5.addEventListener("click",()=>{
  main.innerHTML = "";
  generation5()
})
gen6.addEventListener("click",()=>{
  main.innerHTML = "";
  generation6()
})
gen7.addEventListener("click",()=>{
  main.innerHTML = "";
  generation7()
})
gen8.addEventListener("click",()=>{
  main.innerHTML = "";
  generation8()
})

function generation1(){
  fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")

  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <h3 class="idpoke">${pokemon.id}</h3>
            <img class="imgPoke" src="assets/pokemons/${pokemon.id}.webp">
            <h2 class="nom">${pokemon.name}</h2>
            
        </div>
        `;
    }

    window.onclick = function (e) {
      if (e.target == close || e.target.id == "ipm") {
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
          if (e.code == "ArrowRight"){
          id++;
          fetchPokemon(id)
          }
          })
        

        window.addEventListener("keydown",(e)=>{
          if (e.code == "ArrowLeft"){
          id--;
          fetchPokemon(id)
          }
          })
    }); }) 
  }); 
}
function generation2(){
  fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/2")

  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <h3 class="idpoke">${pokemon.id}</h3>
            <img class="imgPoke" src="assets/pokemons/${pokemon.id}.webp">
            <h2 class="nom">${pokemon.name}</h2>
            
        </div>
        `;
    }

    window.onclick = function (e) {
      if (e.target == close || e.target.id == "ipm") {
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
          if (e.code == "ArrowRight"){
          id++;
          fetchPokemon(id)
          }
          })
        

        window.addEventListener("keydown",(e)=>{
          if (e.code == "ArrowLeft"){
          id--;
          fetchPokemon(id)
          }
          })
    }); }) 
  }); 
}
function generation3(){
  fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/3")

  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <h3 class="idpoke">${pokemon.id}</h3>
            <img class="imgPoke" src="assets/pokemons/${pokemon.id}.webp" alt="image de ${pokemon.name}">
            <h2 class="nom">${pokemon.name}</h2>
            
        </div>
        `;
    }

    window.onclick = function (e) {
      if (e.target == close || e.target.id == "ipm") {
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
          if (e.code == "ArrowRight"){
          id++;
          fetchPokemon(id)
          }
          })
        

        window.addEventListener("keydown",(e)=>{
          if (e.code == "ArrowLeft"){
          id--;
          fetchPokemon(id)
          }
          })
    }); }) 
  }); 
}
function generation4(){
  fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/4")

  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <h3 class="idpoke">${pokemon.id}</h3>
            <img class="imgPoke" src="assets/pokemons/${pokemon.id}.webp" alt="image de ${pokemon.name}">
            <h2 class="nom">${pokemon.name}</h2>
            
        </div>
        `;
    }

    window.onclick = function (e) {
      if (e.target == close || e.target.id == "ipm") {
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
          if (e.code == "ArrowRight"){
          id++;
          fetchPokemon(id)
          }
          })
        

        window.addEventListener("keydown",(e)=>{
          if (e.code == "ArrowLeft"){
          id--;
          fetchPokemon(id)
          }
          })
    }); }) 
  }); 
}
function generation5(){
  fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/5")

  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <h3 class="idpoke">${pokemon.id}</h3>
            <img class="imgPoke" src="assets/pokemons/${pokemon.id}.webp" alt="image de ${pokemon.name}">
            <h2 class="nom">${pokemon.name}</h2>
            
        </div>
        `;
    }

    window.onclick = function (e) {
      if (e.target == close || e.target.id == "ipm") {
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
          if (e.code == "ArrowRight"){
          id++;
          fetchPokemon(id)
          }
          })
        

        window.addEventListener("keydown",(e)=>{
          if (e.code == "ArrowLeft"){
          id--;
          fetchPokemon(id)
          }
          })
    }); }) 
  }); 
}
function generation6(){
  fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/6")

  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <h3 class="idpoke">${pokemon.id}</h3>
            <img class="imgPoke" src="assets/pokemons/${pokemon.id}.webp" alt="image de ${pokemon.name}">
            <h2 class="nom">${pokemon.name}</h2>
            
        </div>
        `;
    }

    window.onclick = function (e) {
      if (e.target == close || e.target.id == "ipm") {
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
          if (e.code == "ArrowRight"){
          id++;
          fetchPokemon(id)
          }
          })
        

        window.addEventListener("keydown",(e)=>{
          if (e.code == "ArrowLeft"){
          id--;
          fetchPokemon(id)
          }
          })
    }); }) 
  }); 
}
function generation7(){
  fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/7")

  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <h3 class="idpoke">${pokemon.id}</h3>
            <img class="imgPoke" src="assets/pokemons/${pokemon.id}.webp" alt="image de ${pokemon.name}">
            <h2 class="nom">${pokemon.name}</h2>
            
        </div>
        `;
    }

    window.onclick = function (e) {
      if (e.target == close || e.target.id == "ipm") {
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
          if (e.code == "ArrowRight"){
          id++;
          fetchPokemon(id)
          }
          })
        

        window.addEventListener("keydown",(e)=>{
          if (e.code == "ArrowLeft"){
          id--;
          fetchPokemon(id)
          }
          })
    }); }) 
  }); 
}
function generation8(){
  fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/8")

  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      
      main.innerHTML += `
        <div class="card" style="${bgType1(pokemon)}">
            <h3 class="idpoke">${pokemon.id}</h3>
            <img class="imgPoke" src="assets/pokemons/${pokemon.id}.webp" alt="image de ${pokemon.name}">
            <h2 class="nom">${pokemon.name}</h2>
            
        </div>
        `;
    }

    window.onclick = function (e) {
      if (e.target == close || e.target.id == "ipm") {
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
          if (e.code == "ArrowRight"){
          id++;
          fetchPokemon(id)
          }
          })
        

        window.addEventListener("keydown",(e)=>{
          if (e.code == "ArrowLeft"){
          id--;
          fetchPokemon(id)
          }
          })
    }); }) 
  }); 
}

//-----------------------------------Comportement Menu déroulant GENERATION + TYPE---------------------------------------------------

let menuG = document.querySelector(".menuG");
let menuD = document.querySelector(".menuD");
let genPokes = document.querySelectorAll(".generationPokemon");
let typePokes = document.querySelectorAll(".typePokemon")
let containerBoutonGauche = document.querySelector(".containerBoutonGauche")
let containerBoutonDroit = document.querySelector(".containerBoutonDroit")

genPokes.forEach((genPoke) =>{
  containerBoutonGauche.addEventListener("click", ()=>{
    genPoke.classList.toggle("deroule");
  })
  // containerBoutonGauche.addEventListener("mouseout", ()=>{
  //   genPoke.classList.remove("deroule");
  // })
})

typePokes.forEach((typePoke) =>{
  containerBoutonDroit.addEventListener("click", ()=>{
    typePoke.classList.toggle("deroule");
  })
  // containerBoutonDroit.addEventListener("mouseout", ()=>{
  //   typePoke.classList.remove("deroule");
  // })
})
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
 
