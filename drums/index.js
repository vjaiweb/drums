var numberdrums = document.querySelectorAll(".drum").length;


for(var i=0;i<numberdrums;i++){
 document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     //console.log(this.innerHTML);
    var btn= this.innerHTML ;
    makes(btn);
    btnanime(btn);

});

}

document.addEventListener("keypress", function (ev){
  makes(ev.key);
  btnanime(ev.key);
});


function makes(key) {
  switch (key) {
    case "w":
        var crash= new Audio('sounds/crash.mp3');
        crash.play();
    break;
    case "a":
      var tom1= new Audio('sounds/tom-1.mp3');
        tom1.play();
    break;
    case "s":
      var tom2= new Audio('sounds/tom-2.mp3');
        tom2.play();
    break;
    case "d":
      var tom3= new Audio('sounds/tom-3.mp3');
        tom3.play();
    break;
    case "j":
      var tom4= new Audio('sounds/tom-4.mp3');
        tom4.play();
    break;
    case "k":
      var kick= new Audio('sounds/kick-bass.mp3');
        kick.play();
    break;
    case "l":
      var snare= new Audio('sounds/snare.mp3');
        snare.play();
    break;
    default:
        break;
}  

}



function btnanime(ckey){
  
   var active= document.querySelector("."+ckey);
   active.classList.add("pressed");

   setTimeout(function (){
     active.classList.remove("pressed");
   }, 150 );


}





