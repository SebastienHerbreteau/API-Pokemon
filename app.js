let typeCouleur = {
  Normal: "background-image: url('assets/normal.png')",
  Combat: "background-image: url('assets/combat.png')",
  Vol: "background-image: url('assets/vol.png')",
  Poison: "background-image: url('assets/poison.png')",
  Sol: "background-image: url('assets/sol.png')",
  Roche:
    "background: rgb(255,205,111);background: linear-gradient(50deg, rgba(255,205,111,1) 30%, rgba(255,174,23,1) 50%, rgba(255,205,111,1) 70%)",
  Insecte: "background-image: url('assets/insecte.png')",
  Spectre:
    "background: rgb(166,95,232);background: linear-gradient(50deg, rgba(166,95,232,1) 30%, rgba(183,0,237,1) 50%, rgba(166,95,232,1) 70%)",
  Acier:
    "background: rgb(88,175,153);background: linear-gradient(50deg, rgba(88,175,153,1) 30%, rgba(114,209,215,1) 50%, rgba(88,175,153,1) 70%)",
  Feu: "background-image: url('assets/feu.png')",
  Eau: "background-image: url('assets/eau.png')",
  Plante: "background-image: url('assets/plante.png')",
  Électrik: "background-image: url('assets/electrik.png')",
  Psy: "background-image: url('assets/psy.png')",
  Glace:
    "background: rgb(49,181,255);background: linear-gradient(50deg, rgba(49,181,255,1) 30%, rgba(190,252,255,1) 50%, rgba(49,181,255,1) 70%)",
  Dragon:
    "background: rgb(0,129,201);background: linear-gradient(50deg, rgba(0,129,201,1) 30%, rgba(2,0,163,1) 50%, rgba(0,129,201,1) 70%)",
  Ténèbres:
    "background: rgb(0,94,147);background: linear-gradient(50deg, rgba(0,94,147,1) 30%, rgba(1,0,59,1) 50%, rgba(0,94,147,1) 70%)",
  Fée: "background-image: url('assets/fee.png')",
};
// console.log(Object.keys(typeCouleur));
fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/200")
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
        </div>
        `;
    }
  });

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

function bgType1(pokemon) {
  for (const [key, value] of Object.entries(typeCouleur)) {
    if (pokemon.apiTypes[1] == undefined) {
      if (pokemon.apiTypes[0].name == [key]) return [value];
    } else if (pokemon.apiTypes[1] !== undefined) {
      if (pokemon.apiTypes[1].name == [key]) return [value];
    }
  }
}
