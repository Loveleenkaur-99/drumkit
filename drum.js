
 window.addEventListener('keydown',function(event)
            {
                const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
                if (!audio) return;
                audio.currentTime=0;
                audio.play();
            } )

            function PlaySound1() {
                var thissound=document.getElementById('a1');
                thissound.play();
            }

            function StopSound1() {
                var thissound=document.getElementById('a1');
                thissound.pause();
            }

            function PlaySound2() {
                var thissound=document.getElementById('a2');
                thissound.play();
            }

            function StopSound2() {
                var thissound=document.getElementById('a2');
                thissound.pause();
            }

            function PlaySound3() {
                var thissound=document.getElementById('a3');
                thissound.play();
            }

            function StopSound3() {
                var thissound=document.getElementById('a3');
                thissound.pause();
            }

            function PlaySound4() {
                var thissound=document.getElementById('a4');
                thissound.play();
            }

            function StopSound4() {
                var thissound=document.getElementById('a4');
                thissound.pause();
            }

            
     
  
      
  
      
    
