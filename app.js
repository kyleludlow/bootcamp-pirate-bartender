

// create bartender object
var Bartender = function() {
    // calls other methods
}

//adds createDrink to Bartender that takes parameter of Preference object
Bartender.prototype.createDrink = function() {
    console.log('Drink Created');
    //using the preferences, create a drink using up to 5 random ingredients from the pantry object

};


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

var strongIngredients = new drinkIngredients(["glug of rum", "slug of whisky", "splash of gin"]);
var saltyIngredients = new drinkIngredients(["olive on a stick", "salt-dusted rim", "rasher of bacon"]);
var bitterIngredients = new drinkIngredients(["shake of bitters", "splash of tonic", "twist of lemon peel"]);
var sweetIngredients = new drinkIngredients(["sugar cube", "spoonful of honey", "splash of cola"]);
var fruityIngredients = new drinkIngredients(["slice of orange", "dash of cassis", "cherry on top"]);

var pantry = [strongIngredients, saltyIngredients, bitterIngredients, sweetIngredients, fruityIngredients];


//function findIngredients () {
//
//    for (var key in drinkPreferences) {
//        // skip loop if the property is from prototype
//        if (!drinkPreferences.hasOwnProperty(key)) continue;
//
//        var obj = drinkPreferences[key];
//        console.log(obj);
//        for (var prop in obj) {
//            // skip loop if the property is from prototype
//            if(!obj.hasOwnProperty(prop)) continue;
//
//            if
//
//            // your code
//            alert(prop + " = " + obj[prop]);
//        }
//    }
//}


