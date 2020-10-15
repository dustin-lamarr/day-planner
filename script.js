//Sets today's date in body header
var dateToday = moment().format("MMMM Do YYYY");

$('#currentDay').text(dateToday);


var timeSlots = ['#nine', '#ten', '#eleven', '#twelve', '#thirteen', '#fourteen', '#fifteen', '#sixteen'];

 //passes through array to set conditional formatting based on current time compared to planner hour   
$.each(timeSlots, function (i , hour)  {
var currentHour = moment().format('H');
var plannerHour = $(hour).attr('value');

if (currentHour < plannerHour) {
    $(hour).addClass('future');
}

if (currentHour === plannerHour) {
    $(hour).addClass('present');
}

if (currentHour > plannerHour) {
    $(hour).addClass('past');
}
});

$('#nine-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#nine-event').val();
    console.log(saveEvent);
    localStorage.setItem('nine-event' , saveEvent);
})

$('#ten-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#ten-event').val();
    console.log(saveEvent);
    localStorage.setItem('ten-event' , saveEvent);
})

$('#eleven-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#eleven-event').val();
    console.log(saveEvent);
    localStorage.setItem('eleven-event' , saveEvent);
})

$('#twelve-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#twelve-event').val();
    console.log(saveEvent);
    localStorage.setItem('twelve-event' , saveEvent);
})

$('#thirteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#thirteen-event').val();
    console.log(saveEvent);
    localStorage.setItem('thirteen-event' , saveEvent);
})

$('#fourteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#fourteen-event').val();
    console.log(saveEvent);
    localStorage.setItem('fourteen-event' , saveEvent);
})

$('#fifteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#fifteen-event').val();
    console.log(saveEvent);
    localStorage.setItem('fifteen-event' , saveEvent);
})
$('#sixteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#sixteen-event').val();
    console.log(saveEvent);
    localStorage.setItem('sixteen-event' , saveEvent);
})
