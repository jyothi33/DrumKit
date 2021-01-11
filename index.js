var audio;
document.querySelectorAll(".drum").forEach(function(btn){
    btn.addEventListener("click", playAudio);    
});

document.addEventListener("keydown", playAudio);

function playAudio(e){
    var key = e.target.classList[0];
    
    if(e.type === "keydown"){
        key = e.key;
        var keyClick = document.querySelector("."+key);
        keyClick.classList.add("pressed");
        setTimeout(() => {
            keyClick.classList.remove("pressed");
        }, 100);
    }
    else{
        e.target.classList.add("pressed");
        setTimeout(() => {
            e.target.classList.remove("pressed");
        }, 100);
    }
    
    

    switch (key) {
        case "w":
            audio = new Audio("./sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("./sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("./sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("./sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("./sounds/crash.mp3");
            break;
        case "k":
            audio = new Audio("./sounds/kick-bass.mp3");
            break;
        case "l":
            audio = new Audio("./sounds/snare.mp3");
            break;
        default:
            break;
    }
    
    audio.play();
}
