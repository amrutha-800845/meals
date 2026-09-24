let meals=document.getElementById("meals");
async function user() {
    let resolve=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data=await resolve.json();
    let result=data.categories.map((value)=>{
         return `<div class="main" >
         <button class="value"><h6>${value.strCategory}</h6><hr>
         </div>`
        
    })
    meals.innerHTML+=result.join("")
    
}
user();

/*   categories pics */
let card=document.getElementById("card");
async function pic() {
    let response=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    let data=await response.json();
    let result=data.categories.map((value)=>{
        return ` <div class="pic1">
        <h6 class="hi">${value.strCategory}</h6>
        <img src="${value.strCategoryThumb}">


        </div> `
    })
   card.innerHTML += result.join("");
    }
pic();
/* filter */
    

async function name() {
    let fill=document.getElementById("fill");
    let search=document.getElementById("search").value.toLowerCase().trim();
    if(search===""){
        fill.innerHTML=""
    }
    let rej=await fetch(`http://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    let ram=await rej.json();
    let data=ram.meals.map((item)=>{
        
        return ` 
        <div class="area">
       
        <h6>${item.strCategory}</h6>
        <img src="${item.strMealThumb}">
        <p>${item.strArea}</p>
        <h5>${item.strMeal}</h5>
        </div>`
    })
    fill.innerHTML= `
    <h1 class="meals-heading">Meals</h1>
    ${data.join("")}
    `
    
        
    
}
 
