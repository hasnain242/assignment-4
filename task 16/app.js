var time = new Date();
var time1 = new Date("january 1 1970");
var timediff = time.getTime() - time1.getTime();
var timeday = 24 * 60 * 60 * 1000;
var result = timediff / timeday;
document.write(result+"</br>");
document.write(time+"</br>")
document.write(timediff)

