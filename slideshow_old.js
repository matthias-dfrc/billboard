// slideIndex variable controll a visibility e.g. slideIndex is 1 => region 1 is shown
var slideIndex = 0;
showSlides();

  // Slideshow function
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
      //'slides' array have 9 region html pages, when variable 'i' is added slide[i] is hide => "none" is hide. first loop all slides are hidden
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
    slideIndex++;
      // and slide[i-1] will be shown => "block" is shown method. at first loop, first slide will be shown
      // {slideIndex = 1} is reset the loop, when it reach at final page.
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.display = "block";

      //reloading event when the internect is offline
      if (navigator.onLine === false) {
        disconnectedPage();
        function disconnectedPage() {
          //setting time for try reloading e.g. 5000 is 5 seconds
          setTimeout(reloading, 5000);
          //main slide(9 regisons slides) hide
          slides[slideIndex-1].style.display = "none";
          //show disconnectedpage
          var disconnectedPage = document.getElementsByClassName("disconnected")
          disconnectedPage.style.display = "block";
        }
      }
      // Change image every 2 seconds that means showSlides function restart every 2 seconds
      setTimeout(showSlides, 5000);
  }
    // reloading function
    function reloading() {
      location.reload();//checking internect connection interval time 1000 = 1sec
    }
