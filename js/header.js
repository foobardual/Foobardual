
//funciones para el menu
var desplegarMenu= function(){
    var menu = document.getElementsByClassName("menu")[0];
    if(menu.className=="menu"){
        menu.className="menu active";
    }
    else{
        menu.className="menu";
    }
}

var desplegarSubMenu= function(element){
    if(element.className.indexOf("active")==-1){
        element.className+=" active";
    }
    else{
        element.className=element.className.replace("active","");
    }
};

//cambia el color de fondo de la página sobre la que clickemos desde el menú (imitando a google design)
function seccionesBGColor(color) {
    document.body.style.background = color;
}
