



window.onload = () => {



  function getRandomCocktail(){
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
  
  
        response.json().then(function(data) {
          // console.log(data);
          displayRandomCocktail(data);
        });
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
  
  getRandomCocktail();
  
  function displayRandomCocktail(data){
      console.log(data.drinks[0]);
  
      let drinkSection = document.getElementById("drinkSection");
      let drinkInformation = document.getElementById("drinkInformation");
      
      let drinkName = document.createElement("h2");
      drinkName.innerHTML = data.drinks[0].strDrink;
      drinkSection.appendChild(drinkName);
    
      let img = document.createElement("img");
      img.src = data.drinks[0].strDrinkThumb;
      drinkSection.appendChild(img)
  
      let ingredient = document.createElement("h3")
      ingredient.innerHTML = data.drinks[0].strIngredient1;
      drinkInformation.appendChild(ingredient)
  
      let ingredient2 = document.createElement("h3")
      ingredient2.innerHTML = data.drinks[0].strIngredient2;
      drinkInformation.appendChild(ingredient2)
  
      let ingredient3 = document.createElement("h3")
      ingredient3.innerHTML = data.drinks[0].strIngredient3;
      drinkInformation.appendChild(ingredient3)
  
      let ingredient4 = document.createElement("h3")
      ingredient4.innerHTML = data.drinks[0].strIngredient4;
      drinkInformation.appendChild(ingredient4)
  
      let ingredient5 = document.createElement("h3")
      ingredient5.innerHTML = data.drinks[0].strIngredient5;
      drinkInformation.appendChild(ingredient5)
  
      let instructions = document.createElement("h4")
      instructions.innerHTML = data.drinks[0].strInstructions;
      drinkInformation.appendChild(instructions)
  }
  function getRandomMeal(){
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(
        function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' +
              response.status);
            return;
          }
          response.json().then(function(data) {
             console.log(data);
            displayRandomMeal(data);
          })
        }
      )
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
    }
    
    getRandomMeal();

    function displayRandomMeal(data){
    console.log(data.meals[0]);
  
      let mealSection = document.getElementById("mealSection");
      let mealInformation = document.getElementById("mealInformation")
      
      let mealName = document.createElement("h2");
      mealName.innerHTML = data.meals[0].strMeal;
      mealSection.appendChild(mealName);
    
      let img_meal = document.createElement("img");
      img_meal.src = data.meals[0].strMealThumb;
      mealSection.appendChild(img_meal)
  
      let Ingredient = document.createElement("h3")
      Ingredient.innerHTML = data.meals[0].strIngredient1;
      mealInformation.appendChild(Ingredient)
  
      let mealIngredient2 = document.createElement("h3")
      mealIngredient2.innerHTML = data.meals[0].strIngredient2;
      mealInformation.appendChild(mealIngredient2)
  
      let mealIngredient3 = document.createElement("h3")
      mealIngredient3.innerHTML = data.meals[0].strIngredient3;
      mealInformation.appendChild(mealIngredient3)
  
      let mealIngredient4 = document.createElement("h3")
      mealIngredient4.innerHTML = data.meals[0].strIngredient4;
      mealInformation.appendChild(mealIngredient4)
  
      let mealIngredient5 = document.createElement("h3")
      mealIngredient5.innerHTML = data.meals[0].strIngredient5;
      mealInformation.appendChild(mealIngredient5)
  
      let mealInstructions = document.createElement("h4")
      mealInstructions.innerHTML = data.meals[0].strInstructions;
      mealInformation.appendChild(mealInstructions)
    }


    require('dotenv').config();
    const db = require('db')
db.connect({
  password: process.env.MY_API_TOKEN}
})

  function getRandomMovie(){
  fetch('https://api.themoviedb.org/3/trending/movie/week?api_key={process.env=MY_API_TOKEN}')
  .then(
      function(response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
        response.json().then(function(data) {
           console.log(data);
          displayRandomMovie(data);
        })
      }
    )
    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });
  }
  
  getRandomMovie();
  
  function displayRandomMovie(data){
      let results = data.results;
      let i = Math.floor(Math.random() * results.length);
      let movieSection = document.getElementById("movieSection");
      let aboutMovie = document.getElementById("aboutMovie")
      
      console.log(data.results[i]);
      let movieFavs = data.results[i];
      
      
      let movieName = document.createElement("h2");
      movieName.innerHTML = data.results[i].original_title;
      movieSection.appendChild(movieName);
  
      let img = document.createElement("img");
      img.src ="https://image.tmdb.org/t/p/original" + movieFavs.poster_path;
      movieSection.appendChild(img)

      let info = document.createElement("h3");
      info.innerHTML = data.results[i].overview;
      aboutMovie.appendChild(info)
  }
  }
  

  