import { emojiList } from "./export.js";

const form=document.querySelector('form');
const input=document.querySelector('input');
const resultsDiv=document.querySelector('.results');
window.addEventListener('load',()=>display(emojiList));

form.addEventListener('submit',search);
input.addEventListener('keyup',search);




function search(e){
    e.preventDefault();
    let filtered;
    const value=input.value.toLowerCase();
  
     filtered=emojiList.filter((obj)=>{
        return obj.description.includes(value) || obj.tags.toString().includes(value) || obj.aliases.toString().includes(value);
    });
    
    display(filtered);
}
    



function display(arr){
const fragment=document.createDocumentFragment();
resultsDiv.innerHTML="";
arr.forEach(element => {
    const parent=document.createElement('div');
    const icon=document.createElement('p');
    const alias=document.createElement('p');
    const desc=document.createElement('p');

    parent.classList.add('parent');
    parent.style.display="flex";
   
    icon.classList.add("icon");
    alias.classList.add("alias");
    desc.classList.add("desc");
  

    icon.innerText=element.emoji;
    alias.innerText=element.aliases.toString();
    desc.innerText=element.description;

    parent.append(icon,alias,desc);
    fragment.append(parent);





});
resultsDiv.append(fragment);
}


function copyToClipBoard(text){
    window.navigator.clipboard.writeText(text)
    .then(response => {
        alert("Emoji Copied Successfully!");
    })
    .catch(e => {
        alert("Something went wrong!");
    })
}


