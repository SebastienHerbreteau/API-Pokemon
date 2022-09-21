let typeCouleur = {
  Normal:
    "background: rgb(184,184,184);background: linear-gradient(50deg, rgba(184,184,184,1) 30%, rgba(255,255,255,1) 50%, rgba(184,184,184,1) 70%)",
  Combat:
    "background: rgb(255,122,122);background: linear-gradient(50deg, rgba(255,122,122,1) 30%, rgba(255,0,0,1) 50%, rgba(255,122,122,1) 70%)",
  Vol: "background: rgb(190,255,254);background: linear-gradient(50deg, rgba(190,255,254,1) 30%, rgba(46,254,245,1) 50%, rgba(190,255,254,1) 70%);",
  Poison:
    "background: rgb(239,0,255);background: linear-gradient(50deg, rgba(239,0,255,1) 30%, rgba(154,0,255,1) 50%, rgba(239,0,255,1) 70%);",
  Sol: "background: rgb(208,160,129);background: linear-gradient(50deg, rgba(208,160,129,1) 30%, rgba(195,101,41,1) 50%, rgba(208,160,129,1) 70%);",
  Roche:
    "background: rgb(255,205,111);background: linear-gradient(50deg, rgba(255,205,111,1) 30%, rgba(255,174,23,1) 50%, rgba(255,205,111,1) 70%)",
  Insecte:
    "background: rgb(169,255,135);background: linear-gradient(50deg, rgba(169,255,135,1) 30%, rgba(15,173,0,1) 50%, rgba(169,255,135,1) 70%)",
  Spectre:
    "background: rgb(166,95,232);background: linear-gradient(50deg, rgba(166,95,232,1) 30%, rgba(183,0,237,1) 50%, rgba(166,95,232,1) 70%)",
  Acier:
    "background: rgb(88,175,153);background: linear-gradient(50deg, rgba(88,175,153,1) 30%, rgba(114,209,215,1) 50%, rgba(88,175,153,1) 70%)",
  Feu: "background: rgb(255,231,0);background: linear-gradient(50deg, rgba(255,231,0,1) 30%, rgba(255,141,0,1) 50%, rgba(255,231,0,1) 70%);",
  Eau: "background: rgb(0,212,247);background: linear-gradient(50deg, rgba(0,212,247,1) 30%, rgba(0,116,255,1) 50%, rgba(0,212,247,1) 70%);",
  Plante:
    "background: rgb(0,191,93);background: linear-gradient(50deg, rgba(0,191,93,1) 30%, rgba(17,136,0,1) 50%, rgba(0,191,93,1) 70%);",
  Électrik:
    "background: rgb(221,221,221);background: linear-gradient(50deg, rgba(221,221,221,1) 30%, rgba(254,255,0,1) 50%, rgba(221,221,221,1) 70%)",
  Psy: "background: rgb(255,49,88);background: linear-gradient(50deg, rgba(255,49,88,1) 30%, rgba(255,190,202,1) 50%, rgba(255,49,88,1) 70%)",
  Glace:
    "background: rgb(49,181,255);background: linear-gradient(50deg, rgba(49,181,255,1) 30%, rgba(190,252,255,1) 50%, rgba(49,181,255,1) 70%)",
  Dragon:
    "background: rgb(0,129,201);background: linear-gradient(50deg, rgba(0,129,201,1) 30%, rgba(2,0,163,1) 50%, rgba(0,129,201,1) 70%)",
  Ténèbres:
    "background: rgb(0,94,147);background: linear-gradient(50deg, rgba(0,94,147,1) 30%, rgba(1,0,59,1) 50%, rgba(0,94,147,1) 70%)",
  Fée: "background: rgb(255,117,231);background: linear-gradient(50deg, rgba(255,117,231,1) 30%, rgba(255,200,246,1) 50%, rgba(255,117,231,1) 70%)",
};
// console.log(Object.keys(typeCouleur));
fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/200")
  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      let main = document.querySelector("main");
      main.innerHTML += `
        <div class="card" style="background: ${bgType1(pokemon)}">
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

// function bgType1(pokemon) {

for (const [key, value] of Object.entries(typeCouleur)) {
  console.log(`${key}: ${value}`);
}
if (pokemon.apiTypes[1] == undefined) {
  if (pokemon.apiTypes[0].name == Object.keys(typeCouleur)) console.log("ok");
} else if (pokemon.apiTypes[1] !== undefined) {
  if (pokemon.apiTypes[1].name == "Feu");
}

// }
