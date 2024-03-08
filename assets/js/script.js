// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// this adds the .ready function to ensure all elements are rendered before running
$(document).ready(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // this saves the event to local storage using the save button
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, description);
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // this add and removes the past, present, and future classes based on the current hour
  $(".time-block").each(function () {
    var timeBlock = $(this).attr("id").split("-")[1];
    let currentHour = dayjs().format("HH");

    if (currentHour == timeBlock) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (currentHour < timeBlock) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    } else if (currentHour > timeBlock) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  // this gets the event description for local storage
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));

  // TODO: Add code to display the current date in the header of the page.

  // this displays the current date and time to the page
  function updateTime() {
    var secondElaped = setInterval(function () {
      var curTime = dayjs();
      $('#currentDay').text(curTime.format('MMM D, YYYY, h:mm:ss a'));
    })
  }
  updateTime()

// added button to clear local storage
$("#clearScheduleBtn").click(function(event) {
  event.preventDefault;
  $("textarea").val("");
  localStorage.clear();
});


});
