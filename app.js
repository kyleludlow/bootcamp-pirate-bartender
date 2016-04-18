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
// var question1 = prompt('Do ye like yer drinks strong?');
// var question2 = prompt('Do ye like it with a salty tang?');
// var question3 = prompt('Are ye a lubber who likes it bitter?');
// var question4 = prompt('Would ye like a bit of sweetness with yer poison?');
// var question5 = prompt('Are ye one for a fruity finish?');

var Question = function(questionText, flavor, like) {
    this.questionText = questionText;
    this.flavor = flavor;
    this.like = false;
    // method to capture & store into preferences() 
    //console.log(userPrompt);
};

Question.prototype.pushPreferences = function() {
    if (strongOrNo, saltyOrNo == "yes" || "Yes") {
        // pushPreferences
    } 
    else if (strongOrNo == "no" || "No") {
        // pushPreferences
    }
};

var strongQuestion = new Question('Do ye like yer drinks strong?','strong');
var saltyQuestion = new Question('Do ye like it with a salty tang?','salty');
var bitterQuestion = new Question('Are ye a lubber who likes it bitter?', 'bitter');
var sweetQuestion = new Question('Would ye like a bit of sweetness with yer poison?','sweet');
var fruityQuestion = new Question('Are ye one for a fruity finish?','fruity');

var strongOrNo = prompt(strongQuestion.questionText);
var saltyOrNo = prompt(saltyQuestion.questionText);
var bitterOrNo = prompt(bitterQuestion.questionText);
var sweetOrNo = prompt(sweetQuestion.questionText);
var fruityOrNo= prompt(fruityQuestion.questionText);

/*

// create ingredients 
var ingredients = {
    Strong: ["salt", "butter"],
    Salty: [],
}

// create preferences 
var preferences = function(this) {

    ////write if else statement to store preferences based on user prompts
    //pushes ingredients to pantry based on preference
    this.preferenceStrong =  
    this.preferenceSalty =
    this.preferenceSalty =
    this.preferenceSalty =
    this.preferenceSalty =


    if question1 = yes [

        ]
}

//create pantry 
var pantry = {};

*/



