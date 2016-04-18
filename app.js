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

//adds createDrink to Bartender and takes parameter of Preference object
Bartender.prototype.createDrink = function(preference) {
    console.log('Drink Created');
};


//prompt sequence

var startGame = {
    title: "Do ye like yer drinks strong?",
        //text: "You will not be able to recover this imaginary file!",
    type: "info",
    showCancelButton: true,
    confirmButtonColor: "#DD6B55",
    confirmButtonText: "Yes, the stronger the better",
    cancelButtonText: "Ew, no",
    closeOnConfirm: false,
    closeOnCancel: false
}

function startConditions(isConfirm) {
    if (isConfirm) {
        swal("Deleted!", "Your imaginary file has been deleted.", "success");
    } else {
        swal("Cancelled", "Your imaginary file is safe :)", "error");
    }
}



//adds click prompt to button
document.getElementById("promptButton").onclick = function() { swal(startGame, startConditions); };