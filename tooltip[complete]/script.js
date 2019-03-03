window.addEventListener('DOMContentLoaded', function(){

  let house = document.getElementById("house");
  let roof = document.getElementById("roof");
  
  house.onmouseover = function(e) {
    let target = e.target;
    while (target !== this) {
      var tooltip = target.getAttribute('data-tooltip');
      if (tooltip) break;
      target = target.parentNode;
    }

    let tool = document.createElement('div');   
    tool.classList.add("tool")
    tool.innerHTML = target.getAttribute('data-tooltip');      
    document.body.appendChild(tool); 
    let coord = target.getBoundingClientRect();    
    let left = coord.left + ( target.offsetWidth - tool.offsetWidth)/2;
    let top = coord.top - tool.offsetHeight - 5;

    if (top <= 0 ){
      top = coord.top +  target.offsetHeight +5;
    }
    tool.style.left = left + 'px';
    tool.style.top = top  + 'px';
    
    
   
    house.onmouseout = function(e) {     
      tool.remove();
    };


  }
 
 
}) 