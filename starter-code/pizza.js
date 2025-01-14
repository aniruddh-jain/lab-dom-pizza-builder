// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

//let pepperonniButton = document.querySelector(".btn-pepperonni");
//pepperonniButton.onclick = renderPepperonni; 

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

//let mushroomButton = document.querySelector(".btn-mushrooms");
//mushroomButton.onclick = renderMushrooms; 

function renderMushrooms() {
  // Ani: What we are doing here is that we are going into the CSS file and selecting the .mushrooms which are several because being rendered individually.
  // Ani: Then for each of them we reverse the toggle state. 
  // Ani: You need to understand forEach function better especially the conditions of the brackets inside.
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

// Ani: What we are doing here is creating a Green Pepper button and define that whenever someone clicks of the button it renders the GreenPepper Command Once. 

//let greenPepperButton = document.querySelector(".btn-green-peppers");
//greenPepperButton.onclick = renderGreenPeppers; 

//function renderGreenPeppers() {
//  document.querySelectorAll('.green-pepper').forEach(function($greenpepper){
//    if (state.greenPeppers) {
//    $greenpepper.style.visibility = "visible";
//    }
//    else {
//      $greenpepper.style.visibility = "hidden";
//    }
//  })
// }

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(function(greenpepper){
    if (state.greenPeppers) {
      greenpepper.style.visibility = "visible";
    }
    else {
      greenpepper.style.visibility = "hidden";
    }
  })
}

//let whiteSauceButton = document.querySelector(".btn-sauce");
// whiteSauceButton.onclick = renderWhiteSauce; 

// So a thing to note about this is that we are


function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector('.sauce') // TA Added let sauce here because else you would have to write
    if (state.whiteSauce) {
      sauce.classList.add("sauce-white")
    }
    else {
      sauce.classList.remove("sauce-white")
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderPepperonni()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderMushrooms()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

//document.querySelector('.btn.btn-green-peppers').onclick = function() {
//  state.greenPeppers = !state.greenPeppers
//  renderGreenPeppers()
// }

 
document.querySelector('.btn.btn-green-peppers').onclick = function() {
 state.greenPeppers = !state.greenPeppers
 renderGreenPeppers()
}




// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`

document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderWhiteSauce()
}


// Iteration 2: Add click event listener on `<button class="btn btn-crust">`