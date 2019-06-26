//Define global variables


//Declare array to hold strings inputted
var topics = ["Baseball", "Football", "Basketball", "Soccer", "Volleyball"];

//Create a function to dynamically add buttons to the html
function createButton() {

    //Clear the div we are adding buttons to so no multiples are added
    $("#addButton").empty();

    //Generate buttons for each sport in the array
    for (var i = 0; i < topics.length; i++) {

        var sportButton = $("<button>");
        sportButton.addClass('sport-button');
        sportButton.addClass('btn btn-success');
        sportButton.attr('data-name', topics[i]);
        sportButton.text(topics[i]);
        var emptySpace = " ";
        $('#addButton').append(sportButton);
        $('#addButton').append(emptySpace);
    }
}

//Create a function to get the GIF info for the sport
function sportInfo() {

};

//Adding buttons to the array and html
$('#addSport').on("click", function () {
    //Prevent the page from reloading
    event.preventDefault();

    //Take input from form and push to array
    var sportInput = $('#sportInput').val().trim();
    topics.push(sportInput);

    //Call function to create button
    createButton();
});

//Call function on page load
createButton();