// Auto selecting daily variable for AIP
var selectedDay = new Date();
var selectedDay8601 = selectedDay.toISOString().substring(0,10);
console.log(selectedDay8601);
// Auto selecting monthly variable for AIP

// AUto selectin year variable for AIP

  // using API
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.analytics.lbasense.com/AnalyticsVisitStats?user=matthias&pass=bjs0220&siteId=793&startTime=' + selectedDay8601 + 'T00:00:00&endTime=' + selectedDay8601 + 'T24:00:00&resolution=hours&onTime=true', true);

    // When API is loaded => sorting and display
    request.onload = function () {
      // begin accessing JSON data here
      var data = JSON.parse(this.response);
        console.log(data);
        console.log(data[0].data[0]);
        console.log(data[0].data[0].visitorCount[0].region);

        //sorting variables a) sap visitorsNum b) total number of day with average c) total number of month d) total number of year
        var sapVisitorsNum
        var totalNumOfDay
        var totalNumOfMonth
        var totalNumOfYear
        // show visitor counts by 10 spots
        function displayVisitorCounts() {
          for (var i = 0; i < data[0].data[0].visitorCount.length; i++) {
            var siteName = data[0].data[0].visitorCount[i].region
            var numOfDay;
            var numOfMonth;
            var numOfYear;
              if(siteName === 0) {
                siteName = "Wax Museum Booth";
                numOfday = data[0].data[0].visitorCount[i].numVisitors;
              } else if(siteName === 1) {
                siteName = "La Boqueria"
                numOfday = data[0].data[0].visitorCount[i].numVisitors;
              } else if(siteName === 2) {
                siteName = "Rambla Catalunya 125"
                numOfday = data[0].data[0].visitorCount[i].numVisitors;
              } else if(siteName === 3) {
                siteName = "Rambla Catalunya - Muji shop"
              } else if(siteName === 4) {
                siteName = "Rambla Catalunya 25"
              } else if(siteName === 5) {
                siteName = "ALS Office"
              } else if(siteName === 6) {
                siteName = "Felgar Shop"
              } else if(siteName === 7) {
                siteName = "La Mallorquina + Torrons Viçenc"
              } else {
                siteName = "Palau Moja"
              }
              console.log(siteName);
            }
            var visitorsNum = data[0].data[0].visitorCount[i].numVisitors
            var li = document.createElement('li');
            var text = document.createTextNode((i+1) + ". " + nationality + ":  " + visitorsNum + "visitors");

            li.appendChild(text);
            document.querySelector('ul').appendChild(li);
          }
            displayVisitorCounts();
        }
  request.send();
