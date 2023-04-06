var moment = moment();

// the current day is displayed at the top of the calendar
var currentDate = function() {
    $("#current-day").text(moment.format("dddd[,] MMMM Do[,] YYYY"));
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
            var hour = $("<div>")
                .addClass("hour")
                .text(sum - 12 + ":00 p.m.");
        }

        $(".new-row").append(hour);

        var events = $("<div>")
            .addClass("past desc-div new-p");

        auditTask(events, sum);
        addDesc(events);

        $(".new-row").append(events);
        
        var saveBtn = $("<button>")
        .addClass("saveBtn");
        
        $(".new-row").append(saveBtn);
        
        $(".new-row").removeClass("new-row");
        $(".new-p").removeClass("new-p");
    }

};

/* 
var loadTasks = function() {

};

var saveTasks = function() {

}
*/

// each time block is color-coded to indicate whether it is in the past, present, or future
var auditTask = function(taskEl, hour) {
    // compare hour to current time
    var currentHour = moment.format("ddd MMM DD YYYY[ ]" + hour + "[:00:00 GMT-0700]");
    var roundedHour = moment.startOf("hour");

    if(roundedHour.isSame(currentHour)) {
        taskEl.addClass("present").removeClass("past");
    } else if(roundedHour.isBefore(currentHour)) {
        taskEl.addClass("future").removeClass("past");
    }
};

var addDesc = function(taskEl) {
    var desc = $("<p>")
        .addClass("description");
    taskEl.append(desc);
}

$(".desc-div").on("click", "p", function() {
    console.log("clicked");
});

setInterval(function() {
    auditTask();
}, 1000 * 60);

var run = function() {
    currentDate();
    createTimeblocks("9", "17");
};

run();