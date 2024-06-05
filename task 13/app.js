var prom = prompt("enter a number");
var index = prom.split("");
var sum=0
for (var i = 0; i < index.length; i++) {
    sum += parseInt(index[i]);
}
var result = sum / index.length;
document.write("the mean of this number is " + result); 