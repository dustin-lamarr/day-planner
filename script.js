//Sets today's date in body header
var dateToday = moment().format("MMMM Do YYYY");

$('#currentDay').text(dateToday);


var timeSlots = ['#nine', '#ten', '#eleven', '#twelve', '#thirteen', '#fourteen', '#fifteen', '#sixteen'];

 //passes through array to set conditional formatting based on current time compared to planner hour   
$.each(timeSlots, function (i , hour)  {
var currentHour = moment().format('H');
var plannerHour = $(hour).attr('value');
parseInt(plannerHour);
console.log(plannerHour);
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
    var saveEvent = $('#nine').val();
    localStorage.setItem('nine' , saveEvent);
})

var newEvent = localStorage.getItem('nine');
    $('#nine').val(newEvent);

$('#ten-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#ten').val();
    localStorage.setItem('ten' , saveEvent);
})

var newEvent = localStorage.getItem('ten');
    $('#ten').val(newEvent);

$('#eleven-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#elevent').val();
    localStorage.setItem('eleven' , saveEvent);
})

var newEvent = localStorage.getItem('eleven');
    $('#eleven').val(newEvent);

$('#twelve-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#twelve').val();
    localStorage.setItem('twelve' , saveEvent);
})

var newEvent = localStorage.getItem('twelve');
    $('#twelve').val(newEvent);

$('#thirteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#thirteen').val();
    localStorage.setItem('thirteen' , saveEvent);
})

var newEvent = localStorage.getItem('thirteen');
    $('#thirteen').val(newEvent);

$('#fourteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#fourteen').val();
    localStorage.setItem('fourteen' , saveEvent);
})

var newEvent = localStorage.getItem('fourteen');
    $('#fourteen').val(newEvent);

$('#fifteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#fifteen').val();
    localStorage.setItem('fifteen' , saveEvent);
})

var newEvent = localStorage.getItem('fifteen');
    $('#fifteen').val(newEvent);

$('#sixteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#sixteen').val();
    localStorage.setItem('sixteen' , saveEvent);
})

var newEvent = localStorage.getItem('sixteen');
    $('#sixteen').val(newEvent);
