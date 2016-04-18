/*
 -create constructor function that create question objects

 -create constructor function that create ingredient objects

 -create constnructor function for pantry (object of ingredient objects)
 -pantry is an array  of all preferred ingredients

 -create a constructor function for preferences object

*/

// create bartender object
var Bartender = function() {
    // calls other methods
}

//adds createDrink to Bartender that takes parameter of Preference object
Bartender.prototype.createDrink = function(preferences) {
    console.log('Drink Created');
    //using the preferences, create a drink using up to 5 random ingredients from the pantry object

};

// create question object

var Question = function(questionText, flavor, like) {
    this.questionText = questionText;
    this.flavor = flavor;
    this.like = false;
    // method to capture & store into preferences() 
    //console.log(userPrompt);
};

Question.prototype.pushPreferences = function() {
    console.log(this.questionText);
    var userAnswer = prompt(this.questionText);
    if (userAnswer == ("yes" || "Yes")) {
        console.log('YES!!!');
        return this.flavor;
        //preferences[this.flavor] = true; /// This is where we left off, not tested, need to link to preference object
    } 
    else if (userAnswer == ("no" || "No")) {
        // pushPreferences
        console.log('NOOOO!');
    } else {
        console.log('Something is wrong');
    }
};

var strongQuestion = new Question('Do ye like yer drinks strong?','strong');
var saltyQuestion = new Question('Do ye like it with a salty tang?','salty');
var bitterQuestion = new Question('Are ye a lubber who likes it bitter?', 'bitter');
var sweetQuestion = new Question('Would ye like a bit of sweetness with yer poison?','sweet');
var fruityQuestion = new Question('Are ye one for a fruity finish?','fruity');

var questionArray = [strongQuestion, saltyQuestion]; // bitterQuestion, sweetQuestion, fruityQuestion];

//// create preferences
var preferences = function() {

    var preferencesArray = [];
    //pushes ingredients to pantry based on preference
    this.strong = false;
    this.salty = false;
    this.bitter = false;
    this.sweet = false;
    this.fruity = false;

};

preferences.prototype.set = function (key) {
    this[key] = true;
}

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
//strongQuestion.pushPreferences();


// create ingredients 
var ingredients = {
    Strong: ["salt", "butter"],
    Salty: [],
}



//create pantry 
var pantry = {};





