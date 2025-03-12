


let offset = 0
let limit =20


const plus = document.querySelector("#icon")
const input = document.querySelector("input")
const select = document.querySelector("select")
const reset = document.querySelector("button")
const display = document.querySelector(".displayPokemon")
let types
let pokemons
let finalData

   
 const pokemonURL = "https://pokeapi.co/api/v2/pokemon?limit=" + limit + "&offset="+ offset
 const typesURL = "https://pokeapi.co/api/v2/type/?limit=21"

getTypes();
getPokemons(pokemonURL)
plus.addEventListener("click", (e) => {
    offset = offset + limit;
    getPokemons("https://pokeapi.co/api/v2/pokemon?limit=20&offset=" + offset);
  });

async function getPokemons(url){
    pokemons = await getData(url)
    pokemons = pokemons.results
    const promises = []
    if (offset === 0) {
        pokemons.forEach((obj) => {
            promises.push(getData(obj.url))
        });
    } else {
        const existingData = [...finalData];
        pokemons.forEach((obj) => {
            promises.push(getData(obj.url))
        });
        promises.unshift(...existingData);
    }
   finalData = await Promise.all(promises)
console.log(finalData)

    displayData(finalData)
}

select.addEventListener("change", (e) => {
    //   console.log(e.target.value);
  
    const copy = finalData;
  
    if (e.target.value === "all") displayData(finalData);
    else {
      displayData(
        copy.filter((pokemon) =>
          pokemon.types.some((type) => type.type.name === e.target.value)
        )
      );
    }
  });
  
  input.addEventListener("keyup", (e) => {
    if (e.target.value.length === 0) displayData(finalData);
    else {
      if (e.target.value.length > 3) {
        const searchedPokemons = finalData.filter((obj) => {
          return obj.name.includes(e.target.value);
        });
        if (searchedPokemons.length === 0) {
          display.innerHTML = "";
          display.innerHTML = "<h1>No Pokemon Found</h1>";
        } else displayData(searchedPokemons);
      }
    }
  });











function displayData(finalData){
    display.style.display= "flex"
    const fragment = document.createDocumentFragment()
    finalData.forEach((obj)=>{

        const parent = document.createElement("div")
        parent.classList.add("final")
          parent.id = `${obj.name}`
        

        const name = document.createElement("p")
        name.innerText = obj.name
        const image = document.createElement("img")
        image.src= obj.sprites.front_default
        const type = document.createElement("p")
        type.innerHTML = "<strong>Type: </strong>" + obj.types.map(type => type.type.name).join(", ")
       
        parent.append(name,image,type)
        fragment.append(parent)
    })

    display.innerHTML = ''
   
    display.append(fragment)
}





async function getTypes(){
    types = await getData(typesURL)
  types= types.results
    createOptions(types)
}

function createOptions(types){
    const fragment= document.createDocumentFragment()
    types.forEach((obj) => {
        const options = document.createElement("option")
        options.value=obj.name
        options.innerText =obj.name
        fragment.append(options)
    });
    select.append(fragment)
}

async function getData(url) {
    const response = await fetch(url)
    const result = await response.json()
    return result
}


reset.addEventListener("click",(e)=>{
    select.value = "all";
    displayData(finalData);
})
reset.addEventListener("click", (e) => {
    select.value = "all";
    offset = 0;
    getPokemons(pokemonURL);
});