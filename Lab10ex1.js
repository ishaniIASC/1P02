//The starting time
var start= new Date();
var startMilli= start.getTime();
//the time when we press the button
function stopTime(){

  var end= new Date();
  var endMilli= end.getTime();
//subtract end time from start time
  var diffMilli= endMilli- startMilli;
  //converted the diffrence to seconds
  var diffsec= diffMilli/1000;

  alert ("The number of seconds is:" + diffsec);
}
