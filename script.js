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
        
        let drinkName = document.createElement("h2");
        drinkName.innerHTML = data.drinks[0].strDrink;
        drinkSection.appendChild(drinkName);
      
        let img = document.createElement("img");
        img.src = data.drinks[0].strDrinkThumb;
        drinkSection.appendChild(img)
    
        let ingredient = document.createElement("h3")
        ingredient.innerHTML = data.drinks[0].strIngredient1;
        drinkSection.appendChild(ingredient)
    
        let ingredient2 = document.createElement("h3")
        ingredient2.innerHTML = data.drinks[0].strIngredient2;
        drinkSection.appendChild(ingredient2)
    
        let ingredient3 = document.createElement("h3")
        ingredient3.innerHTML = data.drinks[0].strIngredient3;
        drinkSection.appendChild(ingredient3)
    
        let ingredient4 = document.createElement("h3")
        ingredient4.innerHTML = data.drinks[0].strIngredient4;
        drinkSection.appendChild(ingredient4)
    
        let ingredient5 = document.createElement("h3")
        ingredient5.innerHTML = data.drinks[0].strIngredient5;
        drinkSection.appendChild(ingredient5)
    
        let instructions = document.createElement("h4")
        instructions.innerHTML = data.drinks[0].strInstructions;
        drinkSection.appendChild(instructions)
    }
    
    function getRandomMovie(){
    fetch('https://api.themoviedb.org/3/trending/movie/week?api_key=f3930e1fb202ee5fc8fb9be5c56b8e9c&language=en-US&page=1')
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
       
        
        console.log(data.results[i]);
        let movieFavs = data.results[i];
        
        
        let movieName = document.createElement("h2");
        movieName.innerHTML = data.results[i].original_title;
        movieSection.appendChild(movieName);
    
        let img = document.createElement("img");
        img.src ="https://image.tmdb.org/t/p/original" + movieFavs.poster_path;
        movieSection.appendChild(img)

        let info = document.createElement("h4");
        info.innerHTML = data.results[i].overview;
        movieSection.appendChild(info)
    }
    }
    