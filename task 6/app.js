var password=prompt("enter your password")
var regex =  /^[^\s@]+@[^\s@]+\.[^\s@]+/;
if(regex.test(password)){
    document.write('email is valid')
}else{
    document.write('password must be contain number and alphabet')
}