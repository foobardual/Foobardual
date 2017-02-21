
var desplegarMenu= function(){
    var menu = document.getElementsByClassName("menu")[0];
    if(menu.className=="menu"){
        menu.className="menu active";
    }
    else{
        menu.className="menu";
    }
}