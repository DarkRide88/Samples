window.addEventListener('DOMContentLoaded', function(){

  let avatar = document.getElementById("avatar");
  let coords = avatar.getBoundingClientRect();
 
  

  window.onscroll = function(e){     
    if ((avatar.offsetTop + avatar.offsetHeight) < window.pageYOffset) {
      avatar.classList.add("fixed")
    } else {
      avatar.classList.remove("fixed");
    }
  }

 
}) 