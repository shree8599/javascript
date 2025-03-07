

const form = document.querySelector("form")
const input = document.querySelector("input")
const apikey =  "3ca1f87f"
const movie = document.querySelector(".movie")
const BASE_PATH = `https://img.omdbapi.com/?apikey=${apikey}&`


form.addEventListener("submit" , async (e)=> {
    e.preventDefault();
    

try{
const response = await fetch(`https://www.omdbapi.com/?t=${input.value}&apikey=${apikey}`)
const result = await response.json()
console.log(result)
displayData(result)
}catch (error){
   console.log(error)
}

})


function displayData(data) {
    movie.innerHTML = "";
    const fragment = document.createDocumentFragment();
    const image = document.createElement("img");
    image.src = data.Poster !== "N/A" ? data.Poster : "placeholder.jpg";
    fragment.append(image);
    movie.append(fragment);
  }

