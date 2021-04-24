/**REsponsive Nav scripts
 * ===============================================================================================================================================================
 */
 window.addEventListener("scroll", 
 function() {
   var button = document.querySelector(".HeaderContainer");
   button.classList.toggle("sticky", window.scrollY > 100);
   });
 (function($) {
  
    $('#search-button').on('click', function(e) {
      if($('#search-input-container').hasClass('hdn')) {
        e.preventDefault();
        $('#search-input-container').removeClass('hdn')
        return false;
      }
    });
    
    $('#hide-search-input-container').on('click', function(e) {
      e.preventDefault();
      $('#search-input-container').addClass('hdn')
      return false;
    });
    
  })(jQuery);
  /**carousel script
   * ==============================================================================================================
   */
   const delay = 3000; //ms
  
   const slides = document.querySelector(".slides");
   const slidesCount = slides.childElementCount;
   const maxLeft = (slidesCount - 1) * 100 * -1;
   
   let current = 0;
   
   function changeSlide(next = true) {
     if (next) {
       current += current > maxLeft ? -100 : current * -1;
     } else {
       current = current < 0 ? current + 100 : maxLeft;
     }
   
     slides.style.left = current + "%";
   }
   
   let autoChange = setInterval(changeSlide, delay);
   const restart = function() {
     clearInterval(autoChange);
     autoChange = setInterval(changeSlide, delay);
   };
   
   // Controls
   document.querySelector(".next-slide").addEventListener("click", function() {
     changeSlide();
     restart();
   });
   
   document.querySelector(".prev-slide").addEventListener("click", function() {
     changeSlide(false);
     restart();
   });
   