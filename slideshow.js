// slideIndex variable controll a visibility e.g. slideIndex is 1 => region 1 is shown
var slideIndex = 0;
showSlides_top20();


// Top 5 Slideshow function
function showSlides_top20() {
  var i;
  var slides_top20 = Array.prototype.slice.call(document.getElementsByClassName("mySlides_top20"), 0);
  var slides_places = Array.prototype.slice.call(document.getElementsByClassName("mySlides"), 0);
  var slidesTotal = slides_top20.concat(slides_places);

    //'slides' array have 9 region html pages, when variable 'i' is added slide[i] is hide => "none" is hide. first loop all slides are hidden
    for (i = 0; i < slidesTotal.length; i++) {
      slidesTotal[i].style.display = "none";
    }
    slideIndex++;
    // and slide[i-1] will be shown => "block" is shown method. at first loop, first slide will be shown
    // {slideIndex = 1} is reset the loop, when it reach at final page.
    if (slideIndex > slides_top20.length) {slideIndex = 1}
    slides_top20[slideIndex-1].style.display = "block";

    //reloading event when the internet is offline
    if (navigator.onLine === false) {
      disconnectedPage();
    }
    // Change top 5 pages every x seconds that means top5 showSlides function restart every 2 seconds
    if (slideIndex < slides_top20.length) {
      setTimeout(showSlides_top20, 5000);
    } else {
        slideIndex = 0;
        setTimeout(showSlides, 5000);
    }
};

  // slides_places Slideshow function
function showSlides() {
    var i;
    var slides_top20 = Array.prototype.slice.call(document.getElementsByClassName("mySlides_top20"), 0);
    var slides_places = Array.prototype.slice.call(document.getElementsByClassName("mySlides"), 0);
    var slidesTotal = slides_top20.concat(slides_places);

      //'slides' array have 9 region html pages, when variable 'i' is added slide[i] is hide => "none" is hide. first loop all slides are hidden
      for (i = 0; i < slidesTotal.length; i++) {
        slidesTotal[i].style.display = "none";
      }
      slideIndex++;

        // skipping function when the daily API send a null value
        (function skippingNullValue () {
            var request_Overview = new XMLHttpRequest();

            request_Overview.open('GET', 'https://analytics.lbasense.com/api-overview/Overview/SingleSite/HourlyDayNumbers?user=barcelona.bb&pass=barcelona5578&siteId=1829&platformId=2', true);
            request_Overview.onload = function () {
                // begin accessing JSON data here
                var data = JSON.parse(this.response);
                if ( data[slideIndex].visitorsNumber === 'null') {slideIndex += 1;}
            }
            request_Overview.send();

        }) ();


      // and slide[i-1] will be shown => "block" is shown method. at first loop, first slide will be shown
      slides_places[slideIndex-1].style.display = "block";

      //reloading event when the internet is offline
      if (navigator.onLine === false) {
        disconnectedPage();
      }
      // Change image every 2 seconds that means showSlides function restart every 2 seconds
      if (slideIndex < slides_places.length) {
        setTimeout(showSlides, 3000);
      } else {
        slideIndex = 0;
        setTimeout(showSlides_top20, 3000);
      }
  }

    // reloading function
  function reloading() {
    location.reload();//checking internet connection interval time 1000 = 1sec
  }


  // Disconnecting Page showing
  function disconnectedPage() {
      //main slide(9 regisons slides) hide
      var i;
      var slides_top20 = Array.prototype.slice.call(document.getElementsByClassName("mySlides_top20"), 0);
      var slides_places = Array.prototype.slice.call(document.getElementsByClassName("mySlides"), 0);
      var slidesTotal = slides_top20.concat(slides_places);
      for (i = 0; i < slidesTotal.length; i++) {
          slidesTotal[i].style.display = 'none';
      }
      //show disconnectedpage
      var disconnectedPage = document.getElementsByClassName("disconnected");
      disconnectedPage[0].style.display = 'block';

      //setting time for try reloading e.g. 5000 is 5 seconds
      console.log('reconnecting');
      setTimeout(reloading, 3000);
  }
