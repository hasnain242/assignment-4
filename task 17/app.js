var currentDate = new Date();
document.write(currentDate);
var currentHours = currentDate.getHours();
console.log("Current Hours: " + currentHours);
currentDate.setHours(currentHours + 1);
console.log("Updated Date and Time (an hour ahead): " + currentDate);
