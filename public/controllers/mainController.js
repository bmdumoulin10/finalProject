angular.module('routerApp',['ui.router'])
  .config(configRouter)
  .controller('homeCtrl', homeController)
  .controller('myPantryCtrl', myPantryController)
  .controller('searchRecipesCtrl', searchRecipesController)
  .controller('myGroceryListCtrl', myGroceryListController)
  .controller('myCookBookCtrl', myCookBookController)

configRouter.$inject = ['$stateProvider', '$urlRouterProvider']
myPantryController.$inject = ['$state','$window']
searchRecipesController.$inject = ['$state', '$http', '$window']
myGroceryListController.$inject = ['$state', '$window']
myCookBookController.$inject = ['$state', '$window']


  function configRouter($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home',{
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'homeCtrl as hCtrl'
      })
      .state('myPantry',{
        url: '/myPantry',
        templateUrl: 'partials/myPantry.html',
        controller: 'myPantryCtrl as pCtrl'
      })
      .state('searchRecipes',{
        url: '/searchRecipes',
        templateUrl: 'partials/searchRecipes.html',
        controller: 'searchRecipesCtrl as sCtrl'
      })
      .state('searchRecipes.recipeInfo', {
        templateUrl: 'partials/recipeInfo.html',
      })
      .state('myGroceryList',{
        url: '/myGroceryList',
        templateUrl: 'partials/myGroceryList.html',
        controller: 'myGroceryListCtrl as gCtrl'
      })
      .state('myCookBook',{
        url: '/myCookBook',
        templateUrl: 'partials/myCookBook.html',
        controller: 'myCookBookCtrl as cCtrl'
      })
    $urlRouterProvider.otherwise('/')
  }
