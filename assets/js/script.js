var moment = moment();

// the current day is displayed at the top of the calendar
var currentDate = function() {
    $("#currentDay").text(moment.format("dddd[,] MMMM Do[,] YYYY"));
};

// time blocks for standard business hours
var createTimeblocks = function(hourStart, hourEnd) {
    var hours = hourEnd - hourStart;

    var timeBlock = $("<div>")
        .addClass("time-block");

    $("#timeblock-container").append(timeBlock);

    for(var i = 0; i < hours; i++) {
        var timeRow = $("<div>")
            .addClass("row new-row");
    
        $(".time-block").append(timeRow);
    
        var sum = parseInt(i, 10) + parseInt(hourStart, 10);

        if(sum < 12) {
            var hour = $("<div>")
                .addClass("hour")
                .text(sum + ":00 a.m.");
        } else if(sum === 12) {
            var hour = $("<div>")
                .addClass("hour")
                .text(sum + ":00 p.m.");
        } else {
            sum = sum - 12;
            var hour = $("<div>")
                .addClass("hour")
                .text(sum + ":00 p.m.");
        }

        $(".new-row").append(hour);

        var events = $("<div>")
            .addClass("past");
        
        $(".new-row").append(events);

        var saveBtn = $("<button>")
            .addClass("saveBtn");

        $(".new-row").append(saveBtn);

        $(".new-row").removeClass("new-row");


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