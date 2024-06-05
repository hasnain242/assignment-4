var password=prompt("enter your password")
var regex = /^[a-zA-Z][a-z0-9_]*$/;
if(regex.test(password)&&password.length>=8){
    document.write('password is valid')
}else{
    document.write('password must be contain number and alphabet')
}