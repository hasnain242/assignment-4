var str="<html>only print this</html>"
var remtags=
    str.replace(/(<([^>]+)>)/gi, "");
document.write(remtags)