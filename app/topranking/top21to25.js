// Auto selecting day variable for AIP
var selectedDay = new Date();
// returing yesterdate
selectedDay.setDate(selectedDay.getDate() - 1);
// sorting to ISO8601 and year--month--day
var selectedDay8601 = selectedDay.toISOString().substring(0,10);

// using API
var request = new XMLHttpRequest();
request.open('GET', `https://api.analytics.lbasense.com/Nationality?user=barcelona.bb&pass=barcelona5578&siteId=1900&startTime=${selectedDay8601}T00:00:00&endTime=${selectedDay8601}T23:59:59&resolution=days`, true);

// When API is loaded => sorting and display
request.onload = function () {
    // begin accessing JSON data here
    var data = JSON.parse(this.response);

    // sorting top 10 Countries
    var visitorCount = data[0].data[0].visitorCount;

    var sortedVisitorCount = visitorCount.sort(function(a, b) {
        var aNum = parseInt(a.numVisitors);
        var bNum = parseInt(b.numVisitors);
        return bNum - aNum;
    });

    // display Top5 countries function
    (function displayTop10() {

        // sum on whole num of visitor
        var sum = 0;
        function totalNumbers (element) {

            for (var i = 0; i < element.length; i++) {
                sum += element[i].numVisitors;
            }
            return sum
        }
        totalNumbers(visitorCount);

        //loop for listing top 10 countries
        for (var i = 21; i < 26; i++) {
            var nationality = visitorCount[i].populationType.countryName;
            var nationalityIcon = visitorCount[i].populationType.countryIso;
            var visitorsNum = visitorCount[i].numVisitors;

            // declare container variable
            var div = document.createElement('div');

            //creating country flag image
            var flagImage = new Image(50, 35); // ( , ) width and height
            flagImage.src = `../../libs/Countries/${nationalityIcon}.imageset/${nationalityIcon}.png`;
            div.appendChild(flagImage);
            document.querySelector('#countries').appendChild(div);
            // printing top 10 countries
            var text = document.createTextNode(` ${i}. ${nationality}:  ${((visitorsNum / sum) * 100 ).toFixed(2)}%`);
            div.appendChild(text);
            document.getElementById("countries").style.marginTop = "100px";
            document.querySelector('#countries').appendChild(div);


        }
    }) ();
};
request.send();
