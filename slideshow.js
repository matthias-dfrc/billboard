// slideIndex variable controll a visibility e.g. slideIndex is 1 => region 1 is shown
var slideIndex = 0;
showSlides_top5();

// Top 5 Slideshow function
function showSlides_top5() {
  var i;
  var slides_top5 = Array.prototype.slice.call(document.getElementsByClassName("mySlides_top5"), 0);
  var slides_places = Array.prototype.slice.call(document.getElementsByClassName("mySlides"), 0);
  var slidesTotal = slides_top5.concat(slides_places);

    //'slides' array have 9 region html pages, when variable 'i' is added slide[i] is hide => "none" is hide. first loop all slides are hidden
    for (i = 0; i < slidesTotal.length; i++) {
      slidesTotal[i].style.display = "none";
    }
  slideIndex++;
    // and slide[i-1] will be shown => "block" is shown method. at first loop, first slide will be shown
    // {slideIndex = 1} is reset the loop, when it reach at final page.
    if (slideIndex > slides_top5.length) {slideIndex = 1}
    slides_top5[slideIndex-1].style.display = "block";

    //reloading event when the internect is offline
    if (navigator.onLine === false) {
      disconnectedPage();
      function disconnectedPage() {
        //setting time for try reloading e.g. 5000 is 5 seconds
        setTimeout(reloading, 5000);
        //main slide(9 regisons slides) hide
        slidesTotal[slideIndex-1].style.display = "none";
        //show disconnectedpage
        var disconnectedPage = document.getElementsByClassName("disconnected")
        disconnectedPage.style.display = "block";
      }
    }
    // Change top 5 pages every x seconds that means top5 showSlides function restart every 2 seconds
    slideIndex = 0;
    setTimeout(showSlides, 5000);
}

  // slides_places Slideshow function
  function showSlides() {
    var i;
    var slides_top5 = Array.prototype.slice.call(document.getElementsByClassName("mySlides_top5"), 0);
    var slides_places = Array.prototype.slice.call(document.getElementsByClassName("mySlides"), 0);
    var slidesTotal = slides_top5.concat(slides_places);
    
      //'slides' array have 9 region html pages, when variable 'i' is added slide[i] is hide => "none" is hide. first loop all slides are hidden
      for (i = 0; i < slidesTotal.length; i++) {
        slidesTotal[i].style.display = "none";
      }
    slideIndex++;
      // and slide[i-1] will be shown => "block" is shown method. at first loop, first slide will be shown
      slides_places[slideIndex-1].style.display = "block";

      //reloading event when the internect is offline
      if (navigator.onLine === false) {
        disconnectedPage();
        function disconnectedPage() {
          //setting time for try reloading e.g. 5000 is 5 seconds
          setTimeout(reloading, 5000);
          //main slide(9 regisons slides) hide
          slidesTotal[slideIndex-1].style.display = "none";
          //show disconnectedpage
          var disconnectedPage = document.getElementsByClassName("disconnected")
          disconnectedPage.style.display = "block";
        }
      }
      // Change image every 2 seconds that means showSlides function restart every 2 seconds
      if (slideIndex < slides_places.length) {
        setTimeout(showSlides, 3000);
      } else {
        slideIndex = 0;
        setTimeout(showSlides_top5, 3000);
      }
  }

    // reloading function
  function reloading() {
    location.reload();//checking internect connection interval time 1000 = 1sec
  }
