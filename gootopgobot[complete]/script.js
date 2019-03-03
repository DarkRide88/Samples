window.addEventListener('DOMContentLoaded', function(){

  let matrix = document.getElementById("matrix");
  let goTop = document.createElement('span');
  let goBot = document.createElement('span')
  let coordTop = 0;
  window.onscroll = function(e) {
    if (window.pageYOffset > document.documentElement.offsetHeight){     
      goTop.innerHTML = "▲"
      goTop.classList.add('goTop')
      document.body.appendChild(goTop);
    } 
    if (window.pageYOffset == 0) {      
      document.body.removeChild(goTop)
    }

      goTop.onclick = function (){
       coordTop = window.pageYOffset;
        window.scrollTo(0,0)   
        goBot.innerHTML = "▼"
        goBot.classList.add('goBot')
        document.body.appendChild(goBot);
        
        goBot.onclick = function() {
          window.scrollTo(0,coordTop)
          document.body.removeChild(goBot);
        }

    }



  }
 
}) 