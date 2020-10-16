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
    console.log(saveEvent);
    localStorage.setItem('nine' , saveEvent);
})

$('#ten-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#ten').val();
    console.log(saveEvent);
    localStorage.setItem('ten' , saveEvent);
})

$('#eleven-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#elevent').val();
    console.log(saveEvent);
    localStorage.setItem('eleven' , saveEvent);
})

$('#twelve-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#twelve').val();
    console.log(saveEvent);
    localStorage.setItem('twelve' , saveEvent);
})

$('#thirteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#thirteen').val();
    console.log(saveEvent);
    localStorage.setItem('thirteen' , saveEvent);
})

$('#fourteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#fourteen').val();
    console.log(saveEvent);
    localStorage.setItem('fourteen' , saveEvent);
})

$('#fifteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#fifteen').val();
    console.log(saveEvent);
    localStorage.setItem('fifteen' , saveEvent);
})
$('#sixteen-save').on('click', function(event){
    event.preventDefault();
    var saveEvent = $('#sixteen').val();
    console.log(saveEvent);
    localStorage.setItem('sixteen' , saveEvent);
})
