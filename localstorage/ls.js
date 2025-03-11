const text = document.querySelector("textarea")

function savetoLs(){
    localStorage.setItem("savedText",text.value)

}

if (localStorage.getItem("savedText")){
    text.value = localStorage.getItem("savedText")
}
text.addEventListener("input",savetoLs)