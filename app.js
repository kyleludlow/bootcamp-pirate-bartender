
// create bartender object
var Bartender = function() {
    // calls other methods
};

//adds createDrink to Bartender that takes parameter of Preference object
Bartender.prototype.makeDrink = function (theDrinks) {
    var servedDrink = 'Your drink of choice is made of ';
    for (var i = 0; i < theDrinks.length; i++) {
        randomNumber = Math.floor(Math.random() * 4);
        servedDrink += ingredients[theDrinks[i]]['ingredients'][randomNumber] + ' ';  //figure out how to add the proper grammar (commas, periods, amperstamp)
    }
    alert(servedDrink);
};

var bartender = new Bartender();

//constructor function that creates question objects
var Question = function(questionText, flavor, like) {
    this.questionText = questionText;
    this.flavor = flavor;
    this.like = false;
};

//adds method to question constructor to check user preferences and send them to the preferences object
Question.prototype.pushPreferences = function() {
    console.log(this.questionText);
    var userAnswer = prompt(this.questionText);
    if (userAnswer == ("yes" || "Yes")) {
        console.log('YES!!!');
        return this.flavor;
    }
    else if (userAnswer == ("no" || "No")) {
        console.log('NOOOO!');
    } else {
        console.log('Something is wrong');
    }
};
//creates question objects
var strongQuestion = new Question('Do ye like yer drinks strong?','strong');
var saltyQuestion = new Question('Do ye like it with a salty tang?','salty');
var bitterQuestion = new Question('Are ye a lubber who likes it bitter?', 'bitter');
var sweetQuestion = new Question('Would ye like a bit of sweetness with yer poison?','sweet');
var fruityQuestion = new Question('Are ye one for a fruity finish?','fruity');

//stores question objects into an array
var questionArray = [strongQuestion, saltyQuestion]; // bitterQuestion, sweetQuestion, fruityQuestion];

//constructor function for preferences object
var preferences = function() {

    this.strong = false;
    this.salty = false;
    this.bitter = false;
    this.sweet = false;
    this.fruity = false;

};
//gives preference object a method for setting preference equal to true
preferences.prototype.set = function (key) {
    this[key] = true;
};

var drinkPreferences = new preferences();

for (var i = 0; i < questionArray.length; i++) {
    var tempFlavor = '';
    tempFlavor = questionArray[i].pushPreferences();
    console.log(tempFlavor);
    if (tempFlavor) {
        console.log(drinkPreferences);
        drinkPreferences.set(tempFlavor);
    }
}
console.log(drinkPreferences);


// create pantry
var drinkIngredients = function (ingredients) {
    this.ingredients = ingredients;
};

var ingredients = {};

ingredients.strong = new drinkIngredients(["glug of rum", "slug of whisky", "splash of gin"]);
ingredients.salty = new drinkIngredients(["olive on a stick", "salt-dusted rim", "rasher of bacon"]);
ingredients.bitter = new drinkIngredients(["shake of bitters", "splash of tonic", "twist of lemon peel"]);
ingredients.sweet = new drinkIngredients(["sugar cube", "spoonful of honey", "splash of cola"]);
ingredients.fruity = new drinkIngredients(["slice of orange", "dash of cassis", "cherry on top"]);


var getIngredients = function(data){
    var drinkPreferenceKeys = Object.keys(data);
    var currentDrinkPreferences = [];
    for (var i = 0; i < drinkPreferenceKeys.length; i++){
        if (data[drinkPreferenceKeys[i]] == true){
            currentDrinkPreferences.push(drinkPreferenceKeys[i]);
        }

    }
    return currentDrinkPreferences;
};

theRealDrinkPreference = getIngredients(drinkPreferences);


bartender.makeDrink(theRealDrinkPreference);

