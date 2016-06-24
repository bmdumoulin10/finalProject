//myCookBook controller
function myCookBookController($state, $window){
  var cCtrl = this
  cCtrl.title = "My Cookbook"
  var saveCookbook = $window.localStorage.getItem('savedCookbook')

  cCtrl.enterRecipe = saveCookbook === null? []: JSON.parse(saveCookbook)
    // {
    //     name: 'Welcome to your cookbook',
    //     directions: 'Enter your personal recipes above and click "Add Recipe" to get started!'
    // },

  cCtrl.newName = ''
  cCtrl.newDirections = ''

  cCtrl.addRecipe = function(){
    if(cCtrl.newName !== '' && cCtrl.newDirections !== ''){
    cCtrl.enterRecipe.push({
        name: cCtrl.newName,
        directions: cCtrl.newDirections
    })}
    else{
        alert('Please complete both fields in order to add a new recipe')
    }

    cCtrl.newName = ''
    cCtrl.newDirections = ''

    $window.localStorage.setItem('savedCookbook',JSON.stringify(cCtrl.enterRecipe))


    console.log(cCtrl.enterRecipe)
  }

  cCtrl.remove = function(index){
      cCtrl.enterRecipe.splice(index,1)
  }
}
