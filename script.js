//Sets today's date in body header
var dateToday = moment().format("MMMM Do YYYY");
console.log(dateToday);
$('#currentDay').text(dateToday);
timeCode();
var timeSlots = ['#nine', '#ten', '#eleven', '#twelve', '#thirteen', '#fourteen', '#fifteen', '#sixteen'];

function timeCode() {
    var currentHour = moment().format('H');
    // var plannerHour = $('#work-hours').attr('value');
    
    console.log(plannerHour);
    if (currentHour > plannerHour) {
        $(plannerHour).addClass('past');
    }

    if (currentHour === plannerHour) {
        $(planner).addClass('present');
    }
}