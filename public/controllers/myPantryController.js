//myPantry controller
function myPantryController($state,$window){
  var pCtrl = this
  pCtrl.title = "My Pantry Controller"

  // $window.localStorage.getItem('pantryIngredients.split()')

//   pCtrl.userIngredient = [strings]
//
//   pCtrl.newProtein = ''
//   pCtrl.newProduce = ''
//   pCtrl.newGrain = ''
//   pCtrl.newDairy = ''
//
//   pCtrl.addIngredient = function(){
//     pCtrl.enterProtein.push([newProtein])
//     pCtrl.enterProduce.push([newProduce])
//     pCtrl.enterGrain.push([newGrain])
//     pCtrl.enterDairy.push([newDairy])
//   }
//
//   pCtrl.newProtein = ''
//   pCtrl.newProduce = ''
//   pCtrl.newGrain = ''
//   pCtrl.newDairy = ''
//
//   pCtrl.removeIngredient = function(index){
//       pCtrl.enterProtein.splice(index,1)
//       pCtrl.enterProduce.splice(index,1)
//       pCtrl.enterGrain.splice(index,1)
//       pCtrl.enterDairy.splice(index,1)
//   }
// }
  pCtrl.userIngredients = []
// adding and removing proteins

  var saveProtein = $window.localStorage.getItem('pantryProteins')

  pCtrl.enterProtein = saveProtein === null? []: saveProtein.split(',')

  pCtrl.newProtein = ''

  pCtrl.addProtein = function(){
    pCtrl.enterProtein.push(pCtrl.newProtein)
    pCtrl.userIngredients.push(pCtrl.newProtein)

    pCtrl.newProtein = ''
    $window.localStorage.setItem('pantryProteins', pCtrl.enterProtein)
    $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
    console.log(pCtrl.enterProtein)
    console.log(pCtrl.userIngredients)
  }

  pCtrl.removeProtein = function(index){
      pCtrl.enterProtein.splice(index,1)
      pCtrl.userIngredients.splice(index,1)

      $window.localStorage.setItem('pantryProteins', pCtrl.enterProtein)
      $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
  }

// adding and removing produce
  var saveProduce = $window.localStorage.getItem('pantryProduce')

  pCtrl.enterProduce = saveProduce === null? []: saveProduce.split(',')

  pCtrl.newProduce = ''

  pCtrl.addProduce = function(){
    pCtrl.enterProduce.push(pCtrl.newProduce)
    pCtrl.userIngredients.push(pCtrl.newProduce)

    pCtrl.newProduce = ''

    $window.localStorage.setItem('pantryProduce', pCtrl.enterProduce)
    $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
    console.log(pCtrl.enterProduce)
    console.log(pCtrl.userIngredients)
  }

  pCtrl.removeProduce = function(index){
      pCtrl.enterProduce.splice(index,1)
      pCtrl.userIngredients.splice(index,1)

      $window.localStorage.setItem('pantryProduce', pCtrl.enterProduce)
      $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
  }

  // adding and removing grains
  var saveGrain = $window.localStorage.getItem('pantryGrains')

  pCtrl.enterGrain = saveGrain === null? []: saveGrain.split(',')

  pCtrl.newGrain = ''

  pCtrl.addGrain = function(){
    pCtrl.enterGrain.push(pCtrl.newGrain)
    pCtrl.userIngredients.push(pCtrl.newGrain)

    pCtrl.newGrain = ''

    $window.localStorage.setItem('pantryGrains', pCtrl.enterGrain)
    $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
    console.log(pCtrl.enterGrain)
    console.log(pCtrl.userIngredients)
  }

  pCtrl.removeGrain = function(index){
      pCtrl.enterGrain.splice(index,1)
      pCtrl.userIngredients.splice(index,1)

      $window.localStorage.setItem('pantryGrains', pCtrl.enterGrain)
      $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
  }

  // adding and removing dairy
  var saveDairy = $window.localStorage.getItem('pantryDairy')

  pCtrl.enterDairy = saveDairy === null? []: saveDairy.split(',')

  pCtrl.newDairy = ''

  pCtrl.addDairy = function(){
    pCtrl.enterDairy.push(pCtrl.newDairy)
    pCtrl.userIngredients.push(pCtrl.newDairy)

    pCtrl.newDairy = ''

    $window.localStorage.setItem('pantryDairy', pCtrl.enterDairy)
    $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
    console.log(pCtrl.enterDairy)
    console.log(pCtrl.userIngredients)
  }

  pCtrl.removeDairy = function(index){
      pCtrl.enterDairy.splice(index,1)
      pCtrl.userIngredients.splice(index,1)

      $window.localStorage.setItem('pantryDairy', pCtrl.enterDairy)
      $window.localStorage.setItem('pantryIngredients', pCtrl.userIngredients.join(',') )
  }


  //
  // console.log(userIngredients)


  // pCtrl.nutsSeeds = [' Almond Butter',' Almonds', ' Cashews', ' Chia Seeds', ' Hazelnuts (filberts)', ' Mixed Nuts', ' Peanut Butter', ' Peanuts', ' Pecans', ' Pistachios', ' Pumpkin Seeds', ' Sesame Seeds', ' Sunflower Seeds', ' Walnuts']
  // pCtrl.meats = [' Ground Beef', ' Ground Pork', ' Ground Sausage', ' Bison', ' Rabbit', ' Venison', ' Beef', ' Ham', ' Lamb', ' Pork', ' Chicken', ' Duck', ' Goose', ' Ground Chicken', ' Turkey', '  Ground Turkey', ' Chicken Cold Cuts', ' Ham Cold Cuts', ' Turkey Cold Cuts']
  // pCtrl.seafood = [' Clams', ' Crab', ' Crayfish', ' Lobster', ' Mussels', ' Oysters', ' Scallops', ' Shrimp', ' Calamari', ' Catfish', ' Cod', ' Haddock', ' Halibut', ' Salmon', ' Snapper', ' Tilapia', ' Trout', ' Tuna', ' Anchovies', ' Sardines']
  // pCtrl.soyProducts = [' Tempeh', ' Tofu', ' Veggie Burgers']
  // pCtrl.beansPeas = [' Bean Burgers', ' Black Beans', ' Black-Eyed Peas', ' Chickpeas (Garbanzo Beans)', ' Edamame', ' Falafel', ' Hummus (Chickpea Spread)', ' Kidney Beans', ' Lentils', ' Lima Beans (Mature)', ' Navy Beans', ' Pinto Beans', ' Soy Beans', ' Split Peas', ' White Beans']
  // pCtrl.eggs = [' Chicken Eggs', ' Duck Eggs']
  // pCtrl.vegetables1 = [' Arugula', ' Bok Choy', ' Broccoli', ' Collard Greens', ' Kale', ' Mixed Greens', ' Mustard Greens', ' Radicchio', ' Romaine Lettuce', ' Spinach', ' Turnip Greens']
  // pCtrl.vegetables2 = [' Corn', ' Lima Beans', ' Green Peas', ' Plantains', ' Potatoes', ' Water Chestnuts']
  // pCtrl.vegetables3 = [' Acorn Squash', ' Butternut Squash', ' Carrot Juice', ' Carrots', ' Chili Peppers', ' Pumpkin', ' Sweet Red Peppers', ' Red Bell Peppers', ' Sweet Potatoes', ' Tomato Juice', ' Tomatoes', ' Yams']
  // pCtrl.vegetables4 = [' Green Beans', ' Green Peppers', ' Iceberg Lettuce', ' Mushrooms', ' Okra', ' Onions', ' Radishes', ' Red Cabbage', ' Scallions', ' Snow Peas', ' Tomatillos', ' Turnips', ' Wax Beans', ' Yellow Squash', ' Zucchini', ' Celery', ' Cucumbers', ' Eggplant', 'Garlic']
  // pCtrl.vegetables5 = [' Alfalfa Sprouts', ' Artichokes', ' Asparagus', ' Avocado', ' Bean Sprouts', ' Beets', ' Brussels Sprouts', ' Cabbage', ' Cauliflower']
  // pCtrl.fruits1 = [' Cantaloupe', ' Honeydew', ' Watermelon', ' Blackberries', ' Blueberries', ' Cranberries', ' Currants', ' Goji Berries', ' Raspberries', ' Strawberries', ' Cranberry Juice', ' Apple juice', ' Orange Juice', ' Grape Juice', ' Grapefruit Juice', ' Pineapple Juice', ' Pomegrante Juice', ' Prune Juice', ' Cherries', ' Pomegranates', ' Papaya']
  // pCtrl.fruits2 = [' Figs', ' Plums', ' Fruit Cocktail (mixed fruit)', ' Grapefruit', ' Prunes', ' Guava', ' Starfruit', ' Kiwi Fruit', ' Tangerines', ' Lemons', ' Limes', ' Mangoes', ' Nectarines', ' Apples', ' Oranges', ' Apricots', ' Bananas', ' Peaches', ' Pears', ' Persimmons', ' Dates', ' Pineapples']
  // pCtrl.dairy1 = [' Milk', ' Lactose-Free Milks', ' Puddings', ' Frozen Yogurt', ' Ice Cream', ' Sherbert', ' Almond Milk', ' Coconut Milk', ' Rice Milk', ' Soymilk', ' Yogurt', ' Soy Yogurt', ' Cheddar Cheese', ' Mozzarella Cheese', ' Swiss Cheese', ' Parmesan Cheese', ' Ricotta Cheese', ' Cottage Cheese', ' American Cheese', ' Cheese Spreads']
  // pCtrl.grains = [' Brown Rice', ' Buckwheat', ' Oatmeal', ' Popcorn', ' Quinoa', ' Rolled Oats', ' Cornmeal', ' Rye', ' Bread', ' Buns and Rolls', ' Tortillas', ' Wild Rice']
  // pCtrl.oils = [' Vegetable Oil', ' Extra Virgin Olive Oil', ' Butter', ' Margarine', ' Grapeseed Oil', ' Coconut Oil', ' Salad Dressings', ' Fish Oil']

  // pCtrl.checkedNuts = []
  //
  // pCtrl.myPantry = function(){
  //   if(pCtrl.checkedNuts[$index] === true){
  //     pCtrl.checkedNuts.push(pCtrl.checked[$index])
  //   }
  //   console.log('a', pCtrl)
  // }
  // var pantryItems = document.getElementsByTagName('input')

  // pCtrl.check = function(){

  //     pantryItems.checked = true
  // }

  // pCtrl.myPantry = function(){
  //     if(pCtrl.check === true){
  //       pCtrl.savedPantry.push(pantryItems.value)
  //     }
  // }
  // pCtrl.myPantry = function(){
  //     var pantryItems = document.getElementsByTagName('input')
  //       for(var i=0; i < pCtrl.savedPantry.length; i++){
  //         if(pantryItems[i].type === 'checkbox')
  //           pantryItems[i].onclick = pCtrl.savedPantry.push(pantryItems)
  //       }
  //       console.log(pCtrl.savedPantry)
  // }
}
