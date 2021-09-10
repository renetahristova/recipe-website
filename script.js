
const formElement = document.getElementById('form');
const searchInputElement = document.getElementById('query');
const searchButtonElement = document.querySelector('form .search-button')

let input = '';

const APP_ID = '335b33b9';
const APP_key = '6d29cc1dd8042f339b0df08924c1b236';

let htmlT = '';

function getRecipe (){

let baseURL =`https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=12`;

    fetch(baseURL)
        .then(response => response.json())
        .then(data =>{
               data.hits.map(hits => {
                   console.log(hits);
                   htmlT += `
                   <div class="card">
                       <img src="${hits.recipe.image}" alt="" />
                        <h1 class="title">${hits.recipe.label}</h1>
                       <div class="description">
                          <ul>
                            <li>cuisine type:<span>${hits.recipe.cuisineType}</span></li>
                            <li>meal type:<span>${hits.recipe.mealType}</span></li>
                            <li>meal weight:<span>${hits.recipe.totalWeight.toFixed(2)}</span></li>
                         </ul>
                           <div class="method">
                               <button class="btn"><a href="${hits.recipe.url}" target="_blank">View Recipe</a></button>
                           </div>
                       </div>
                   </div>
                   `
                  document.querySelector('.search-result').innerHTML = htmlT;
               })
        })
        .catch(error => {
            console.log(error);
    });
    }

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    input = e.target.querySelector('input').value;
    console.log(input);
    formElement.reset();
    getRecipe();
  });



