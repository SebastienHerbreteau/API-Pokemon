
fetch("100.json")
  .then((response) => response.json())
  .then((pokeBase) => {
    for (pokemon of pokeBase) {
      
    
      if (pokemon.apiTypes[1].name == undefined){
       
        document.body.innerHTML += 
        `
        <div class="card">
          <h2>${pokemon.name}</h2>
          <h3>Pokedex ID# ${pokemon.id}</h3>
          <div class="type">
            <img class="typeImage" src="${pokemon.apiTypes[0].image}"/>
            <p>${pokemon.apiTypes[0].name}</p>
          </div>
          <img class="imgPoke" src="${pokemon.image}">
        </div>
        `
        ;
      }
      else{
        document.body.innerHTML += 
        `
        <div class="card">
          <h2>${pokemon.name}</h2>
          <h3>Pokedex ID# ${pokemon.id}</h3>
          <div class="type">
            <img class="typeImage" src="${pokemon.apiTypes[0].image}"/>
            <p>${pokemon.apiTypes[0].name}</p>
            <img class="typeImage" src="${pokemon.apiTypes[1].image}"/>
            <p>${pokemon.apiTypes[1].name}</p>
          </div>
          <img class="imgPoke" src="${pokemon.image}">
        </div>
        `
      }
        
    
  }
}


);//---------------------------FIN DE THEN ----------------------------





// let pokeImg = document.querySelectorAll(".imgPoke");
// let modal = document.querySelector(".modal");



// pokeImg.forEach((item)=>{
//   item.onclick = function(){
//     modal.classList.add("active");
//     modal.innerHTML += `<img class="imgModal" src="${pokemon.image}"> `;
    
//   }
 
// })

// const imgModal = document.querySelector(".imgModal");

// window.onclick = function (e) {
//   console.log(e.target)
//   if (e.target == imgModal) {
//     modal.classList.remove("active");
//   }
// };