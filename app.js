fetch("pokemon.json")
  .then((response) => response.json())
  .then((pokeBase) => {
    for (pokemon of pokeBase) {
      document.body.innerHTML += `
      <div class="pokemon">
      <div class="border">
        <p>${pokemon.name}</p>
        <img src="${pokemon.image}">
  
        </div>    
        </div> 
        `;
    }
  });
// <img src="${image}" alt=""/>
