// global variables
// slideIndex variable controll a visibility e.g. slideIndex is 1 => region 1 is shown
var slideIndex = 0;
var i;
var slides_TopRaking = Array.prototype.slice.call(document.getElementsByClassName("mySlides_TopRanking"), 0);
var slides_places = Array.prototype.slice.call(document.getElementsByClassName("mySlides"), 0);
var slidesTotal = slides_TopRaking.concat(slides_places);

// checking Next Page null value.
function checkingNext(el) {
    // calling overview API
    var request_Overview = new XMLHttpRequest();
    request_Overview.open('GET', 'https://analytics.lbasense.com/api-overview/Overview/SingleSite/HourlyDayNumbers?user=barcelona.bb&pass=barcelona5578&siteId=1900&platformId=2', false);

    // using Overview_API
    request_Overview.onload = function () {
        // begin accessing JSON data here
        var data = JSON.parse(this.response);
        for (el; el < slides_places.length; el++) {
            var todayNum = data[(el)].visitorsNumber;
            var todayAvgNum = data[(el)].expectedVisitorsNumber;

            if(todayNum !== null && todayAvgNum !== null) {
                break;
            }
            else {
                slideIndex++;
            }
        }
    };
    request_Overview.send();
}



showSlides_TopRanking();

// Top 5 Slideshow function
function showSlides_TopRanking() {


    //'slides' array have 9 region html pages, when variable 'i' is added slide[i] is hide => "none" is hide. first loop all slides are hidden
    for (i = 0; i < slidesTotal.length; i++) {
      slidesTotal[i].style.display = "none";
    }

    slideIndex++;
    // and slide[i-1] will be shown => "block" is shown method. at first loop, first slide will be shown
    // {slideIndex = 1} is reset the loop, when it reach at final page.
    if (slideIndex > slides_TopRaking.length) {slideIndex = 1}

    slides_TopRaking[slideIndex-1].style.display = "block";


    //reloading event when the internet is offline
      disconnectedPage();
    // Change top 5 pages every x seconds that means top5 showSlides function restart every 2 seconds
    if (slideIndex < slides_TopRaking.length) {
      setTimeout(showSlides_TopRanking, 5000);
    } else {
        slideIndex = 0;
        setTimeout(showSlides, 5000);
    }
}

// slides_places Slideshow function
function showSlides() {
        //'slides' array have 9 region html pages, when variable 'i' is added slide[i] is hide => "none" is hide. first loop all slides are hidden
        for (i = 0; i < slidesTotal.length; i++) {
            slidesTotal[i].style.display = "none";
        }
        slideIndex++;
        checkingNext(slideIndex);

        console.log(slideIndex);

        // and slide[i-1] will be shown => "block" is shown method. at first loop, first slide will be shown
        slides_places[slideIndex - 1].style.display = "block";
        console.log(`${slideIndex - 1} is show`);

        //reloading event when the internet is offline
        disconnectedPage();
        // Change image every 2 seconds that means showSlides function restart every 2 seconds
        if (slideIndex < slides_places.length) {
            setTimeout(showSlides, 5000);
        } else {
            slideIndex = 0;
            setTimeout(showSlides_TopRanking, 3000);
        }
}

    // reloading function
  function reloading() {
    location.reload();//checking internet connection interval time 1000 = 1sec
  }


  // Disconnecting Page showing
  function disconnectedPage() {
      if (navigator.onLine === false) {

          //main slide(9 regisons slides) hide
          for (i = 0; i < slidesTotal.length; i++) {
              slidesTotal[i].style.display = 'none';
          }
          //show disconnectedpage
          var disconnectedPage = document.getElementsByClassName("disconnected");
          disconnectedPage[0].style.display = 'block';

          //setting time for try reloading e.g. 5000 is 5 seconds
          console.log('reconnecting');
          setTimeout(reloading, 5000);
      }
  }


