const loader = document.querySelector('.loader');
const image= document.querySelector('.image');
let images =[]
let load 
const apikey= "BKqaB-PbZqheqKroNRofwvDBDzj6ZS73PLizNBtPdRo"
const count = 18


async function getPhotos(){
    load=false
    try{
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`)
        images = await response.json()
        displayphotos()
    }
    catch(error){
        console.log(error)
    }
}

function displayphotos(){
const fragment = document.createDocumentFragment()
    images.forEach(image=>{
        const img = document.createElement('img')
        img.src = image.urls.regular
        fragment.appendChild(img)
    });
    loader.style.display="none"
    image.appendChild(fragment)
    load=true
}

window.addEventListener('scroll',()=>{
    window.innerHeight + window.scrollY >= document.body.offsetHeight && load ? getPhotos():""
}
)

getPhotos()