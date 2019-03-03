window.addEventListener('DOMContentLoaded', function(){

  let thumb = document.getElementById("thumb");
  let slider = document.getElementById("slider");
  slider.getBoundingClientRect()
  let startCoord = slider.offsetLeft; 
  let endCoord = slider.offsetLeft + slider.offsetWidth;
  

  thumb.onmousedown = function(e){

    let coords = thumb.getBoundingClientRect();
    let shiftX = e.pageX - coords.left;
    let shiftY = e.pageY - coords.top;     
    
    thumb.style.position = "absolute";
    document.body.appendChild(thumb);

    thumb.style.left = e.pageX - shiftX + 'px';
    thumb.style.top = e.pageY - shiftY + 'px';

    thumb.style.zIndex = "1000";
  
    document.onmousemove = function(e){
      thumb.style.left = e.pageX - shiftX + 'px';
      if (e.pageX < startCoord){
        thumb.style.left = startCoord - shiftX + 'px';
        document.onmousemove = null;
      }
      if (e.pageX > endCoord){
        thumb.style.left = endCoord- shiftX + 'px';
        document.onmousemove = null;
      }
    }
    thumb.onmouseup = function() {
      document.onmousemove = null;
      thumb.onmouseup = null;
    };    

  }
  thumb.ondragstart = function() {
    return false;
  };
  
 
}) 