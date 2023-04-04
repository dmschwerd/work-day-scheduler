var moment = moment();

// current date display
var currentDate = function() {
    $("#currentDay").text(moment.format("dddd[,] MMMM Do[,] YYYY"));
};

// time blocks for standard business hours
var createTimeblocks = function(hourStart, hourEnd) {
    var hours = hourEnd - hourStart;
    
    for(var i = 0; i < hours; i++) {
        var sum = parseInt(i, 10) + parseInt(hourStart, 10);
        //var taskRow = $("<>")
        if(sum < 12) {
            var taskDiv = $("<div>")
                .addClass("time-block")
                .text(sum + ":00 a.m.");
        } else {
            var taskDiv = $("<div>")
                .addClass("time-block")
                .text(sum + " p.m.");
        }

        $("#timeblock-container").append(taskDiv);
    }

};

/* 
var loadTasks = function() {

};

var saveTasks = function() {

}
*/

/* each time block is color-coded to indicate whether it is in the past, present, or future
var auditTask = function() {

};

setInterVal(function() {

}, 1000 * 60);

// the current day is displayed at the top of the calendar
setInterVal(function() {

}, 1000 * 60);
*/


var run = function() {
    currentDate();
    createTimeblocks("9", "17");
};

run();