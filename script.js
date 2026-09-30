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
                <img src="${value.strMealThumb}" alt="${value.strMeal} "onclick="note('${value.strMeal}')">
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


/* last page */
function note(three) {
    window.open(`last-page.html?meal=${encodeURIComponent(three)}`, "_self");
}

async function getMeal() {
    let params = new URLSearchParams(window.location.search);
    let meal = params.get("meal");
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(meal)}`);
    let data = await response.json();
    let mealData = data.meals.find((item) => { 
        return item.strMeal.toLowerCase() === meal.toLowerCase();
    });

    let name = `
        <div class="meal-descrip">
          <h4> 🏡>>${mealData.strMeal} </h4>
        </div>`;

    let details =
        `
        <div class = "detail">
        <h3>MEAL DETAILS</h3> <hr>
        </div>
        `

    let img = `
          <div class="image">
        <img src="${mealData.strMealThumb}">
         </div>
        `;

    let desc = `
      <div class="dataa">
         <div class = "dec">
         <h3>${mealData.strMeal}</h3> <hr>
         <h4>${mealData.strCategory}</h4>
         <p> ${mealData.strSource}</p>
         <h6>${mealData.strTags}</h6>

         <div class ="teja">
         <h5>ingridents</h5>
         <p>${mealData.strIngredient1}</p>
         <p>${mealData.strIngredient2}</p>
         <p>${mealData.strIngredient3}</p>
         <p>${mealData.strIngredient4}</p>
         <p>${mealData.strIngredient5}</p>
         <p>${mealData.strIngredient6}</p>
         <p>${mealData.strIngredient7}</p>
         <p>${mealData.strIngredient8}</p>
         <p>${mealData.strIngredient9}</p>
         <p>${mealData.strIngredient10}</p>
         <p>${mealData.strIngredient11}</p>
         <p>${mealData.strIngredient12}</p>
         <p>${mealData.strIngredient13}</p>
         <p>${mealData.strIngredient14}</p>
         <p>${mealData.strIngredient15}</p>
         <p>${mealData.strIngredient16}</p>
         <p>${mealData.strIngredient17}</p>
         <p>${mealData.strIngredient18}</p>
         <p>${mealData.strIngredient19}</p>
         <p>${mealData.strIngredient20}</p>
         </div>
         </div>
         </div>
        `;

    let measurements = "";
    for (let i = 1; i <= 20; i++) {
        let measure = mealData[`strMeasure${i}`];
        if (measure && measure.trim() !== "") {
            measurements += `
            <p>${measure.trim()}</p>
        `;
        }
    }

    let dd = `
    <div class="data1">
        <h5>Measure:</h5>
        ${measurements}
    </div>
`;



    let instructionList = "";
    let instructions = mealData.strInstructions
        .split(".")
        .filter(value => value.trim() !== "");

    for (let instruction of instructions) {
        instructionList += `
        <div class="instruction-item">
            <span class="check">✓</span>
            <p>${instruction.trim()}.</p>
        </div>
    `;
    }

    let instruc = `
    <div class="instructions">
        <h5>Instructions:</h5>

        <div class="instruction-list">
            ${instructionList}
        </div>
    </div>
`;
    let result = `
    <div class="meal-container">
        ${img}
        ${desc}
    </div>
`;
    let valli = document.getElementById("valli")
    valli.innerHTML = `  ${name} ${details} ${result} ${dd} ${instruc}`
}

getMeal();
