var moment = moment();

// current date display
var currentDate = function() {
    $("#currentDay").text(moment.format("dddd[,] MMMM Do[,] YYYY"));
};

// time blocks for standard business hours
var createTimeblocks = function(hourStart, hourEnd) {
    var hours = hourEnd - hourStart;
    
    for(var i = 0; i < hours; i++) {
        console.log("inside createTimeblocks for loop")
        //var taskRow = $("<>")

        var taskDiv = $("<div>")
            .addClass("time-block")
            .text(i + hourStart);
        
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