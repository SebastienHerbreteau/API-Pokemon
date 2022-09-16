fetch("pokemon.json")
  .then((response) => response.json())
  .then((pokeBase) => {
    for (pokemon of pokeBase) {
      document.body.innerHTML += 
      `
      <div class="pokemon">
      <div class="border">
        <h2>${pokemon.name}</h2>
        <h3>Pokedex #${pokemon.id}</h3>
        <div class="type">
        <img class="typeImage" src="${pokemon.apiTypes[0].image}"/>
        <p>${pokemon.apiTypes[0].name}</p>
        <img class="typeImage" src="${pokemon.apiTypes[1].image}"/>
        <p>${pokemon.apiTypes[1].name}</p>
        </div>
        
        
        <img class="imgPoke" src="${pokemon.image}">
        
      </div>    
      </div>
      `;
    }

    
  });



  // for (pokemon of pokeBase) {
  //   document.body.innerHTML += 
  //   `
  //   <div class="pokemon">
  //   <div class="border">
  //     <h2>${pokemon.name}</h2>
  //     <p>Pokedex #${pokemon.id}</p>
  //     <img src="${pokemon.image}">
  //     <p>${pokemon.apiTypes.entries[1]}</p>
  //   </div>    
  //   </div>
  //   `;
  // }
  // ${pokemon.apiTypes[1].name}

  // <h2>${pokeBase[1].apiTypes[1].name}</h2>
  // <h2>${pokeBase[1].apiTypes[0].name}</h2>