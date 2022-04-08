// <!-- GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var todayDate = moment().format("MMM Do YYYY");;
$("#currentDay").text(todayDate);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

//     <!-- Timeblocks go here -->
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist -->
$(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, value);

});
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));


var hour9 = '9am';
var hour10 = '10am';
var hour11 = '11am';
var hour12 = '12pm';
var hour1 = '1pm';
var hour2 = '2pm';
var hour3 = '3pm';
var hour4 = '4pm';
var hour5 = '5pm';
var currentHour = moment().format('H');
var description = document.querySelectorAll('.description');

description.forEach(function(timeEl) {
    var blockHour = timeEl.id;
    console.log(currentHour, blockHour)
    if (parseInt(currentHour) < parseInt(blockHour)) {
        timeEl.classList.add("future");
        timeEl.classList.remove("present");
        timeEl.classList.remove("past");

    } else if (parseInt(currentHour) == parseInt(blockHour)) {
        timeEl.classList.add("present")
        timeEl.classList.remove("future");
        timeEl.classList.remove("past");
    } else {
        timeEl.classList.add("past");
        timeEl.classList.remove("present");
        timeEl.classList.remove("future");
    }

})
// if (currentHour < hour9) {
//     $("#9").addClass("future");
// } else if (currentHour > hour9) {
//     $("#9").addClass("past");
// } else if (currentHour = hour9) {
//     $("#9").addClass("present");
// }

// if (currentHour < hour10) {
//     $("#10").addClass("future");
// } else if (currentHour > hour10) {
//     $("#10").addClass("past");
// } else if (currentHour = hour10) {
//     $("#10").addClass("present");
// }

// if (currentHour < hour11) {
//     $("#11").addClass("future");
// } else if (currentHour > hour11) {
//     $("#11").addClass("past");
// } else if (currentHour = hour11) {
//     $("#11").addClass("present");
// }

// if (currentHour < hour12) {
//     $("#12").addClass("future");
// } else if (currentHour > hour12) {
//     $("#12").addClass("past");
// } else if (currentHour = hour12) {
//     $("#12").addClass("present");
// }

// if (currentHour < hour1) {
//     $("#1").addClass("future");
// } else if (currentHour > hour1) {
//     $("#1").addClass("past");
// } else if (currentHour = hour1) {
//     $("#1").addClass("present");
// }

// if (currentHour < hour2) {
//     $("#2").addClass("future");
// } else if (currentHour > hour2) {
//     $("#2").addClass("past");
// } else if (currentHour = hour2) {
//     $("#2").addClass("present");
// }

// if (currentHour < hour3) {
//     $("#3").addClass("future");
// } else if (currentHour > hour3) {
//     $("#3").addClass("past");
// } else if (currentHour = hour3) {
//     $("#3").addClass("present");
// }

// if (currentHour < hour4) {
//     $("#4").addClass("future");
// } else if (currentHour > hour4) {
//     $("#4").addClass("past");
// } else if (currentHour = hour4) {
//     $("#4").addClass("present");
// }

// if (currentHour < hour5) {
//     $("#5").addClass("future");
// } else if (currentHour > hour5) {
//     $("#5").addClass("past");
// } else if (currentHour = hour5) {
//     $("#5").addClass("present");
// }