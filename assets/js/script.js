

//Code starts with what day it is at the moment

function updateTime(){
    $("#twoDay").text(moment().format("dddd, MMMM Do"));
}



hourUpdater();
function hourUpdater() {

// Portion of the code that identifies the hour of the day and blocks hours that have passed with the "if/else" conditional statements

var currentHour = moment().hours();
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);

        if (blockHour < currentHour) { 
            $(this).addClass("past");
        // do not want to show past hours

        } else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        //marking current and past hours with the appropriate names "past"
        
        } else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        //Otherwise it should display all three evenly
        }

    });

}




$(document).ready(function() {

    $(".saveBtn").on("click", function() {
// Adding functionality to the save button in order to keep information on screen

        var value = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);

    })

})


//Saving all 9-5 hours
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-1 .description").val(localStorage.getItem("hour-1"));
$("#hour-2 .description").val(localStorage.getItem("hour-2"));
$("#hour-3 .description").val(localStorage.getItem("hour-3"));
$("#hour-4 .description").val(localStorage.getItem("hour-4"));
$("#hour-5 .description").val(localStorage.getItem("hour-5"));