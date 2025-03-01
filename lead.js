const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const country = document.querySelector('.country');
const score = document.querySelector('.score');
const form = document.querySelector('form');
const newscore =[]
const sContainer = document.querySelector('.nContainer');

form.addEventListener('submit', (e) => {
    e.preventDefault ()
const data = {
fname: fname.value,
lname: lname.value,
country: country.value,
score: Number(score.value),
id: newscore.length

}
newscore.push(data)
console.log(newscore)
renderScore()
})
function renderScore(){
sContainer.innerHTML = '';
const fragment = document.createDocumentFragment();
// Sort the newscore array before rendering
newscore.sort((a, b) => b.score - a.score);

newscore.forEach(data => {
const scoreContainer = document.createElement('div');
scoreContainer.classList.add('scoreContainer');
scoreContainer.style.backgroundColor = '#7DF9FF';
scoreContainer.style.color = 'black';


const name = document.createElement('p');
name.innerText = `${data.fname} ${data.lname}`;

const country = document.createElement('p');
country.innerText = `${data.country}`;

const marks = document.createElement('p');
marks.innerText = `${data.score}`;
const deleteBtn = document.createElement('span');
deleteBtn.classList.add('deleteBtn');   
deleteBtn.innerHTML= '&times;';
deleteBtn.addEventListener('click', (p) => {
    const index = newscore.findIndex(item => item.id === data.id);
    if (index !== -1) {
        newscore.splice(index, 1);
        renderScore();
    }
})


const p5 = document.createElement('span');
p5.classList.add('plus');
p5.innerHTML = '+5';
p5.addEventListener('click', (p) => {
data.score = data.score + 5;
renderScore();
})
const m5 = document.createElement('span');
m5.classList.add('minus');
m5.innerHTML = '-5';
m5.addEventListener('click', (p) => {
data.score = data.score - 5;
renderScore();
})


// Sort the newscore array before rendering



scoreContainer.append(name, country, marks, deleteBtn, p5, m5);
fragment.append(scoreContainer);





})
sContainer.append(fragment)
}




form.addEventListener('submit', (e) => {
    e.preventDefault()
    form.reset()
    
})