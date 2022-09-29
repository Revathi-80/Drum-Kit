
var number = document.querySelectorAll(".drum").length;

// to detect the button press

for(var i=0;i<number;i++){

     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
            
          var buttonInnerHTML = this.innerHTML;

          makeSound(buttonInnerHTML);
          buttonAnimation(buttonInnerHTML);
        
     });
   
}

// to detect the key press

document.addEventListener("keypress", function(event) {
          makeSound(event.key);
          buttonAnimation(event.key);
});

// function to play for the corresponding key 

function makeSound (key) {

     switch(key){
          case "w" : 
            var audio=new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
          case "a" : 
            var audio=new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
          case "s" :
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
          case "d" : 
            var audio=new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
          case "j" : 
            var audio=new Audio("./sounds/snare.mp3");
            audio.play();
            break;
          case "k" : 
            var audio=new Audio("./sounds/crash.mp3");
            audio.play();
            break;
          case "l" : 
            var audio=new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
         default:
             console.log(buttonInnerHTML);
       }


}


function buttonAnimation (currentKey) {
     
    var active= document.querySelector("."+currentKey);
    
    active.classList.add("pressed");

    setTimeout(function() {
      active.classList.remove("pressed");
    }, 100);

}