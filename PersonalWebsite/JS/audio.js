 var bgaudiocount = 0;
    function bgaudio(){       
        ++bgaudiocount;
        if(bgaudiocount % 2 == 1){   
            document.getElementById("bgaudio").play();      
        }else{
            document.getElementById("bgaudio").pause();
        }
      
    }

