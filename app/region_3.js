// Auto selecting daily variable for AIP
var selectedDay = new Date();
var selectedDay8601 = selectedDay.toISOString().substring(0,10);

var currentHour = selectedDay.getHours();
var currentMinutes = selectedDay.getMinutes();


  // setting for using API
  var request_SAP = new XMLHttpRequest();
  var request_Overview = new XMLHttpRequest();

  // calling SAP API
  request_SAP.open('GET', 'https://analytics.lbasense.com/api-sap/CurrentSAPEventTypeValueForSite?user=adminservice&pass=UNZd5zNG5NKTXh8CbfB3qnVfa&siteId=793&platformId=2', true);

  // calling overview API
  request_Overview.open('GET', 'https://analytics.lbasense.com/api-overview/Overview/SingleSite/HourlyDayNumbers?user=barcelona.bb&pass=barcelona5578&siteId=1829&platformId=2', true);
    // using SAP_API
    request_SAP.onload = function () {
      // begin accessing JSON data here
      var data = JSON.parse(this.response);

      // write on the HTML file about Visitor number of SAP API
      var sapNum = null;

      var newtext_1 = document.createTextNode(sapNum),
      sapText = document.getElementById("sapNumber");
      sapText.appendChild(newtext_1);

      // wirte on the HTML file about currenttime
      var currentHour = selectedDay.getHours();
      var currentMinutes = selectedDay.getMinutes();

      var newtext_2 = document.createTextNode(" " + currentHour + ":" + currentMinutes);
      currentTimeText = document.getElementById("currentTime");
      currentTimeText.appendChild(newtext_2);
    }
    request_SAP.send();

    // using Overview_API
    request_Overview.onload = function () {
      // begin accessing JSON data here
      var data = JSON.parse(this.response);
      // write on the HTML FILE about Monthly visitor number of Overview API
      var monthlyNum = data[0].visitorsNumber
      var div = document.createElement('div');
      var monthlyNumText = document.createTextNode(monthlyNum);
      div.appendChild(monthlyNumText);
      document.querySelector('#monthlyNumber').appendChild(div);

      // write on the HTML FILE about yearly visitor number of Overview API
      var yearlyNum = data[0].visitorsNumber
      var div = document.createElement('div');
      var yearlyNumText = document.createTextNode(yearlyNum);
      div.appendChild(yearlyNumText);
      document.querySelector('#yearlyNumber').appendChild(div);


    }
    request_Overview.send();
