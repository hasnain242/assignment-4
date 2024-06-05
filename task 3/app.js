var password=prompt("enter your password")
var regex = /[a-zA-Z]+[0-9]+/;
if(regex.test(password)){
    document.write('password is valid')
}else{
    document.write('password must be contain number and alphabet')
}
