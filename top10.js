// Auto selecting day variable for AIP
var selectedDay = new Date();
selectedDay.setDate(selectedDay.getDate() - 1);
var selectedDay8601 = selectedDay.toISOString().substring(0,10);

  // using API
  var request = new XMLHttpRequest();
  request.open('GET', 'https://api.analytics.lbasense.com/Nationality?user=barcelona.bb&pass=barcelona5578&siteId=793&startTime=' + selectedDay8601 + 'T00:00:00&endTime=' + selectedDay8601 + 'T23:59:59&resolution=days', true);

  // When API is loaded => sorting and display
  request.onload = function () {
    // begin accessing JSON data here
    var data = JSON.parse(this.response);

    // sorting top 10 Countries
    var visitorCount = data[0].data[0].visitorCount;
    sortedVisitorCount = visitorCount.sort(function(a, b) {
      var aNum = parseInt(a.numVisitors);
      var bNum = parseInt(b.numVisitors);
      return bNum - aNum;
    });

    // cheking data ojbect
    console.log(visitorCount);
    console.log(sortedVisitorCount);
    console.log(data[0].data[0].visitorCount[0].populationType.countryName);


    // display Top10 countries function
    function displayTop10() {

      for (var i = 0; i < 10; i++) {
        var nationality = data[0].data[0].visitorCount[i].populationType.countryName
        var visitorsNum = data[0].data[0].visitorCount[i].numVisitors
        var li = document.createElement('li');
        var text = document.createTextNode((i+1) + ". " + nationality + ":  " + visitorsNum + "visitors");

        li.appendChild(text);
        document.querySelector('ul').appendChild(li);
      }
    }
  // activate displayTop10 function
  displayTop10();
  }
  request.send();