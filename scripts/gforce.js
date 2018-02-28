//var gforce = 10;
//
//function countdown(){
//    gforce--;
//    if (gforce == 0) {
//        gforce++;
//    } else {
//        document.getElementById("gforce").innerHTML = gforce; 
//        window.setTimeout("countdown()",1000);
//    }
//}
//countdown();

var gforce = 10;

function countdown() {
    for(var i = 0; i < 10; i++){
        gforce = Math.floor((Math.random() * 10) + 1); 
        console.log(i);
    }  
    document.getElementById("gforce").innerHTML = gforce;
}
countdown();
