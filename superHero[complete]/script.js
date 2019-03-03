window.addEventListener('DOMContentLoaded', function(){
  
  document.body.onmousedown = function(e){
    target = e.target;
    if(!(target.classList.contains("draggable")))return
    

    let coords = target.getBoundingClientRect();
    let shiftX = e.pageX - coords.left;    
    let shiftY = e.pageY - coords.top;    
   
    target.style.position = "absolute";

    document.body.appendChild(target);

    target.style.left = e.pageX - shiftX + 'px';
    target.style.top = e.pageY - shiftY + 'px';

    
  
    document.onmousemove = function(e){        
      let left = e.pageX - shiftX;
      let top = e.pageY - shiftY;   
      let endCoord = document.body.offsetLeft + document.body.offsetWidth - target.offsetWidth;
      if (left < 0){        
        left = 0;
      } 
      if (left > endCoord ) {
        left = endCoord;
      }
      
      target.style.left = left + 'px';
      target.style.top = top + 'px';
    }
    target.onmouseup = function() {
      document.onmousemove = null;
      target.onmouseup = null;
    };    

  }
  target.ondragstart = function() {
    return false;
  };
  
 
}) 