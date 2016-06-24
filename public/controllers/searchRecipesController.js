//searchRecipes controller
function searchRecipesController($state, $http, $window){
  var sCtrl = this
  sCtrl.search = ''
  var pantrySearch = $window.localStorage.getItem('pantryIngredients')
  var apiEndpoint = 'http://food2fork.com/api/search?key=f206a92ae214d581175efee15c23a843&q='
  sCtrl.title = "Search Recipes"
  sCtrl.recipeIndex = []

  // sCtrl.recipes = [
  //   {
  //     name: 'Spicy Garlic Lime Chicken',
  //     ingredients: ['salt', 'pepper', 'cayenne pepper', 'paprika', 'garlic powder', 'onion powder', 'thyme', 'parsley', 'boneless skinless chicken breast', '2 tablespoons butter', 'olive oil', 'lime juice'],
  //     prepTime: '5 minutes',
  //     cookTime: '20 minutes',
  //     readyIn: '25 minutes',
  //     directions: ['In a small bowl, mix together salt, pepper, cayenne, paprika, garlic powder, onion powder, thyme, and parsely. Sprinkle spice micture generously on both sides of chicken breasts.', 'Heat butter and olive oil in a large skillet over medium heat. Saute chicken until golden brown, about 6 minutes on each side. Sprinkle with garlic powder and lime juice. Cook 5 minutes, stirring frequently to coat evenly with sauce.']
  //   }]

    sCtrl.searchRecipes = function(){
      console.log('searching for recipes....');

      $http.get(apiEndpoint + encodeURIComponent(sCtrl.search))
        //.then(success, oops)
        .then(function(response){
          sCtrl.recipeIndex = response.data.recipes
        }, function(error){
          console.error(error)
      })
    sCtrl.search = ''
    }

    sCtrl.searchRecipesByPantry = function(){
      console.log('searching for recipes....');

      $http.get(apiEndpoint + encodeURIComponent(pantrySearch))
        //.then(success, oops)
        .then(function(response){
          sCtrl.recipeIndex = response.data.recipes
        }, function(error){
          console.error(error)
      })
    }

    // $http.get(apiEndpoint + encodeURIComponent(sCtrl.search))
    //   //.then(success, oops)
    //   .then(function(response){
    //     sCtrl.recipeIndex = response.data.recipes
    //   }, function(error){
    //     console.error(error)
    // })
}
