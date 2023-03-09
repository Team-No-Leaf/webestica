var utcDate1 = new Date(Date.UTC(2023, 01, 01, 1, 30, 0));
var utcDate2 = new Date(Date.UTC(2023, 01, 01, 12, 30, 0));

var localHour1 = utcDate1.getHours();
var localMinute1 = utcDate1.getMinutes();

var localHour2 = utcDate2.getHours();
var localMinute2 = utcDate2.getMinutes();

document.getElementById("start-time").innerHTML = ""+localHour1+":"+localMinute1+"";
document.getElementById("end-time").innerHTML = ""+localHour2+":"+localMinute2+"";