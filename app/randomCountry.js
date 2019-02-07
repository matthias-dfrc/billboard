// Auto selecting day variable for AIP
var selectedDay = new Date();
// returing yesterdate
selectedDay.setDate(selectedDay.getDate() - 2);
// sorting to ISO8601 and year--month--day
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


  // display Random countries function
  function displayCountry() {
    //loop for listing top 10 countries
    var randomCountryNumber = Math.floor(Math.random() * 23);
    if(randomCountryNumber <= 5) {
      randomCountryNumber += 5;
    }

      var nationality = data[0].data[0].visitorCount[randomCountryNumber].populationType.countryName;
      var nationalityIcon = data[0].data[0].visitorCount[randomCountryNumber].populationType.countryIso;
        console.log(nationality);
          // declare container variable
          var div1 = document.createElement('div');
          var div2 = document.createElement('div');

          //creating country flag image
          var flagImage = new Image(350, 250); // ( , ) width and height
          flagImage.src = '../libs/Countries/' + nationalityIcon +'.imageset/' + nationalityIcon + '.png';
          div1.appendChild(flagImage);
          document.querySelector('#countriesFlag').appendChild(div1);

          // printing top 10 countries
          var countryRank = document.createTextNode(nationality + " is Ranked " + (randomCountryNumber+1));
          div2.appendChild(countryRank);
          document.querySelector('#countriesRank').appendChild(div2);
          setTimeout(reloading, 21000);
    }
    // activate displayTop10 function
    displayCountry();
    function reloading() {
        location.reload();//checking internect connection interval time 1000 = 1sec
    }

}
request.send();


