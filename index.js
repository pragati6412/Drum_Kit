let n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var exp=this.innerHTML;
        if (exp==="w"){
            var audio1=new Audio('crash.mp3');
            audio1.play();
        }
        else if (exp==="a"){
            var audio2=new Audio('kick-bass.mp3');
            audio2.play();
        }
        else if (exp==="s"){
            var audio3=new Audio('snare.mp3');
            audio3.play();
        }
        else if (exp==="d"){
            var audio4=new Audio('tom-1.mp3');
            audio4.play();
        }
        else if (exp==="j"){
            var audio5=new Audio('tom-2.mp3');
            audio5.play();
        }
        else if (exp==="k"){
            var audio6=new Audio('tom-3.mp3');
            audio6.play();
        }
        else{
            var audio7=new Audio('tom-4.mp3');
            audio7.play();
        }
    });
}

document.addEventListener("keydown",function(event){
    var exp=event.key;
    if (exp==="w"){
        var audio1=new Audio('crash.mp3');
        audio1.play();
    }
    else if (exp==="a"){
        var audio2=new Audio('kick-bass.mp3');
        audio2.play();
    }
    else if (exp==="s"){
        var audio3=new Audio('snare.mp3');
        audio3.play();
    }
    else if (exp==="d"){
        var audio4=new Audio('tom-1.mp3');
        audio4.play();
    }
    else if (exp==="j"){
        var audio5=new Audio('tom-2.mp3');
        audio5.play();
    }
    else if (exp==="k"){
        var audio6=new Audio('tom-3.mp3');
        audio6.play();
    }
    else{
        var audio7=new Audio('tom-4.mp3');
        audio7.play();
    }
})
