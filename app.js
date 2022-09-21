fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/200")
  .then((response) => response.json())
  .then((pokebase) => {
    for (pokemon of pokebase) {
      document.body.innerHTML += `
        <div class="card" style="background: ${bgType1()}">
          <h2>${pokemon.name}</h2>
          <h3>#${pokemon.id}</h3>
          <img class="imgPoke" src="${pokemon.image}">
          <div class="type">${type()}
          </div>
        </div>
        `;
    }
    function type() {
      if (pokemon.apiTypes[1] == undefined) {
        return `<img class="typeImage" src="${pokemon.apiTypes[0].image}"/>
                  <p>${pokemon.apiTypes[0].name}</p>`;
      } else {
        return `<img class="typeImage" src="${pokemon.apiTypes[0].image}"/>
                  <p>${pokemon.apiTypes[0].name}</p> <img class="typeImage" src="${pokemon.apiTypes[1].image}"/>
                  <p>${pokemon.apiTypes[1].name}</p>`;
      }
    }
    function bgType1() {
      if (pokemon.apiTypes[1] == undefined) {
        if (pokemon.apiTypes[0].name == "Poison")
          return "background: rgb(239,0,255);background: linear-gradient(50deg, rgba(239,0,255,1) 30%, rgba(154,0,255,1) 50%, rgba(239,0,255,1) 70%);";
        if (pokemon.apiTypes[0].name == "Plante")
          return "background: rgb(0,191,93);background: linear-gradient(50deg, rgba(0,191,93,1) 30%, rgba(17,136,0,1) 50%, rgba(0,191,93,1) 70%);";
        if (pokemon.apiTypes[0].name == "Feu")
          return "background: rgb(255,231,0);background: linear-gradient(50deg, rgba(255,231,0,1) 30%, rgba(255,141,0,1) 50%, rgba(255,231,0,1) 70%);";
        if (pokemon.apiTypes[0].name == "Eau")
          return "background: rgb(0,212,247);background: linear-gradient(50deg, rgba(0,212,247,1) 30%, rgba(0,116,255,1) 50%, rgba(0,212,247,1) 70%);";
        if (pokemon.apiTypes[0].name == "Insecte")
          return "background: rgb(169,255,135);background: linear-gradient(50deg, rgba(169,255,135,1) 30%, rgba(15,173,0,1) 50%, rgba(169,255,135,1) 70%);";
        if (pokemon.apiTypes[0].name == "Acier") return "lightgrey";
        if (pokemon.apiTypes[0].name == "Combat") return "red";
        if (pokemon.apiTypes[0].name == "Électrik") return "yellow";
        if (pokemon.apiTypes[0].name == "Dragon") return "darkblue";
        if (pokemon.apiTypes[0].name == "Fée") return "lightpink";
        if (pokemon.apiTypes[0].name == "Glace") return "lightblue";
        if (pokemon.apiTypes[0].name == "Normal") return "white";
        if (pokemon.apiTypes[0].name == "Psy") return "pink";
        if (pokemon.apiTypes[0].name == "Roche") return "gray";
        if (pokemon.apiTypes[0].name == "Spectre") return "lightgray";
        if (pokemon.apiTypes[0].name == "Sol") return "sand";
        if (pokemon.apiTypes[0].name == "Vol") return "blue";
        if (pokemon.apiTypes[0].name == "Ténèbres") return "black";
      } else if (pokemon.apiTypes[1] !== undefined) {
        if (pokemon.apiTypes[1].name == "Poison")
          return "background: rgb(239,0,255);background: linear-gradient(50deg, rgba(239,0,255,1) 30%, rgba(154,0,255,1) 50%, rgba(239,0,255,1) 70%);";
        if (pokemon.apiTypes[1].name == "Plante")
          return "background: rgb(0,191,93);background: linear-gradient(50deg, rgba(0,191,93,1) 30%, rgba(17,136,0,1) 50%, rgba(0,191,93,1) 70%);";
        if (pokemon.apiTypes[1].name == "Feu")
          return "background: rgb(255,231,0);background: linear-gradient(50deg, rgba(255,231,0,1) 30%, rgba(255,141,0,1) 50%, rgba(255,231,0,1) 70%);";
        if (pokemon.apiTypes[1].name == "Eau")
          return "background: rgb(0,212,247);background: linear-gradient(50deg, rgba(0,212,247,1) 30%, rgba(0,116,255,1) 50%, rgba(0,212,247,1) 70%);";
        if (pokemon.apiTypes[1].name == "Insecte")
          return "background: rgb(169,255,135);background: linear-gradient(50deg, rgba(169,255,135,1) 30%, rgba(15,173,0,1) 50%, rgba(169,255,135,1) 70%);";
        if (pokemon.apiTypes[1].name == "Acier") return "lightgrey";
        if (pokemon.apiTypes[1].name == "Combat") return "red";
        if (pokemon.apiTypes[1].name == "Électrik") return "yellow";
        if (pokemon.apiTypes[1].name == "Dragon") return "darkblue";
        if (pokemon.apiTypes[1].name == "Fée") return "lightpink";
        if (pokemon.apiTypes[1].name == "Glace") return "lightblue";
        if (pokemon.apiTypes[1].name == "Normal") return "white";
        if (pokemon.apiTypes[1].name == "Psy") return "pink";
        if (pokemon.apiTypes[1].name == "Roche") return "gray";
        if (pokemon.apiTypes[1].name == "Spectre") return "lightgray";
        if (pokemon.apiTypes[1].name == "Sol") return "sand";
        if (pokemon.apiTypes[1].name == "Vol") return "blue";
        if (pokemon.apiTypes[1].name == "Ténèbres") return "yellow";
      }
    }
  });
