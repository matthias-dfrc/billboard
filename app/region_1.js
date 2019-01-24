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
  request_Overview.open('GET', 'https://analytics.lbasense.com/api-overview/Overview/SingleSite/HourlyDayNumbers?user=adminservice&pass=UNZd5zNG5NKTXh8CbfB3qnVfa&siteId=793&platformId=2', true);

    // using SAP_API
    request_SAP.onload = function () {
      // begin accessing JSON data here
      var data = JSON.parse(this.response);
        console.log(data);

        // write on the HTML file about Visitor number of SAP
        var sapNum = data[0].uniqueCount
        var div = document.createElement('div');
        var sapText = document.createTextNode(sapNum);
        div.appendChild(sapText);
        document.querySelector('#sapNumber').appendChild(div);

        // wirte on the HTML file about currenttime
        var currentTimeText = document.createTextNode(" " + currentHour + ":" + currentMinutes);
        div.appendChild(currentTimeText);
        document.querySelector('#currentTime').appendChild(div);
    }
    request_SAP.send();

    // using Overview_API
    request_Overview.onload = function () {
      // begin accessing JSON data here
      var data = JSON.parse(this.response);
        console.log(data);


    }
    request_Overview.send();
