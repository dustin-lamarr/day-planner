//Sets today's date in body header
var dateToday = moment().format("MMMM Do YYYY"); 
console.log(dateToday);
$('#currentDay').text(dateToday);
timeCode();

function timeCode(){
    var currentHour = moment().format('H');
    var plannerHour = $('#nine-ten').attr('value');
    console.log(plannerHour);
    if(currentHour > plannerHour){
        $('#nine-ten').addClass('past')
    }
}