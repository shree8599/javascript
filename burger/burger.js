const button = document.querySelector("button")
const checkbox = document.querySelectorAll("input")
const orderButton = document.querySelector(".order")
let selecteditems = []
button.addEventListener("click",()=>{
    selecteditems = [];
    checkbox.forEach( async(item)=>{
        if (item.checked) {
            // Add your logic here
         selecteditems.push(item.value)
        }
    })
        if(selecteditems.length===0){
            alert ("please select atleast one item")
            return
         }
         
         orderButton.disabled = true;
     
         const foodImage = document.getElementById('foodImage');
         const orderIdElement = document.getElementById('orderId');
         const orderIdValueElement = document.getElementById('orderIdValue');
     
         orderIdElement.style.display = 'none';
         foodImage.style.display = 'none';
     
         const promise = new Promise(function(resolve, reject){
             setTimeout(function(){
                 resolve()
             }, getRandomTime())
         });
     
         promise.then(function(){
             const orderId = getRandomOrderId();
             orderIdValueElement.textContent = orderId;
             orderIdElement.style.display = 'block';
     
             const foodToShow = selecteditems[Math.floor(Math.random() * selecteditems.length)];
     
             switch(foodToShow){
                 case 'Burger':
                     foodImage.src= 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
                     break;
                 case 'Fries':
                     foodImage.src = 'https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
                     break;
                 case 'Pasta':
                     foodImage.src = 'https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cEFTVEF8ZW58MHx8MHx8fDA%3D'
                     break;
             case 'Coke': 
                 foodImage.src = 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                 break;
         }
         foodImage.style.display = 'block';
         orderButton.disabled = false;
     });




   
})

 

function getRandomTime(){
    return Math.floor(Math.random() * 5000) + 2000 //random time between 2 to 7 sec
}

function getRandomOrderId(){
    return Math.floor(Math.random() * 1000) + 100;  //random ID between 100 to 1099
}