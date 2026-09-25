let meals=document.getElementById("meals");
async function user() {
    let resolve=await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data=await resolve.json();
    let result=data.categories.map((value)=>{
         return `<div class="main" >
<button class="value" onclick="veg('${value.strCategory}')">
    <h6>${value.strCategory}</h6>
    <hr>
</button>
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
    

    <img src="${value.strCategoryThumb}" onclick="veg('${value.strCategory}')">


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



    /* linking img to second page */

    
    // let chicken=document.getElementById("chicken");
    // async function veg(cat) {
    //     let page= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    //     let data1=await page.json();
    //     let temp=data1.categories.find((value)=>{
    //         return value.strCategory === cat;
    //     })
    //     chicken.innerHTML=temp;
    // }
    /* connecting to another page */
        
    
    async function veg(pro) {
        window.open(`second.html?category=${encodeURIComponent(pro)}`,"_self")
        
    }
 async function temp() {
    let match = document.getElementById("match");

    let res = new URLSearchParams(window.location.search);
    let category = res.get("category");

    // Get category description
    let resol = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let data = await resol.json();

    let categoryData = data.categories.find((value) => {
        return value.strCategory.toLowerCase() === category.toLowerCase();
    });

    // Get meals of selected category
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`);
    let mealdata = await meal.json();

    // Description
    let descript = `
        <div class="cat">
            <h2>${categoryData.strCategory}</h2>
            <h5>${categoryData.strCategoryDescription}</h5>
        </div>
    `;

    // Meal heading
    let heading = `
        <div class="head">
            <h2>MEALS</h2>
        </div>
    `;

    // Display meals
    let mean = mealdata.meals.map((value) => {
        return `
            <div class="me">
                <img src="${value.strMealThumb}" alt="${value.strMeal}">
                <h5>${value.strMeal}</h5>
            </div>
        `;
    });

    match.innerHTML = `
        ${descript}
        ${heading}
        <div class="one1">
            ${mean.join("")}
        </div>
    `;
}

temp();