// Auto selecting daily variable for AIP
var selectedDay = new Date();
var selectedDay8601 = selectedDay.toISOString().substring(0,10);

// var i = 1;
// var j = 1;


  // setting for using API
  var request_SAP = new XMLHttpRequest();
  var request_Overview = new XMLHttpRequest();
  var request_DailyNumbers = new XMLHttpRequest();

  // // calling SAP API
  // request_SAP.open('GET', 'https://analytics.lbasense.com/api-sap/CurrentSAPEventTypeValueForSite?user=adminservice&pass=UNZd5zNG5NKTXh8CbfB3qnVfa&siteId=793&platformId=2', true);

    // calling overview API
    request_Overview.open('GET', 'https://analytics.lbasense.com/api-overview/Overview/SingleSite/HourlyDayNumbers?user=barcelona.bb&pass=barcelona5578&siteId=1900&platformId=2', true );

    // calling dailynumbers JavaScript
    request_DailyNumbers.open('GET', 'https://analytics.lbasense.com/api-overview/Overview/SingleSite/DailyNumbers?user=barcelona.bb&pass=barcelona5578&siteId=1900&platformId=2', true);

    // // using SAP_API
    // request_SAP.onload = function () {
    //   // begin accessing JSON data here
    //   var data = JSON.parse(this.response);
    //   console.log('data');
    //
    //     // write on the HTML file about Visitor number of SAP API
    //     var sapNum = data[0].uniqueCount
    //
    //     var newtext_1 = document.createTextNode(sapNum);
    //     var sapText = document.getElementById("sapNumber");
    //     sapText.appendChild(newtext_1);
    //
    //     // wirte on the HTML file about currenttime
    //     var currentHour = selectedDay.getHours();
    //     var currentMinutes = selectedDay.getMinutes();
    //
    //     var newtext_2 = document.createTextNode(" " + currentHour + ":" + currentMinutes);
    //     var currentTimeText = document.getElementById("currentTime");
    //     currentTimeText.appendChild(newtext_2);
    //
    // }
    // request_SAP.send();

    // using Overview_API
    request_Overview.onload = function () {

    // begin accessing JSON data here
    var data = JSON.parse(this.response);
    //
    // for(i; i < data.length; i++) {
    //     // write on the HTML FILE about today visitor number of Overview API
    //     var todayNum = data[i].visitorsNumber;
    //     var todayAvgNum = data[i].expectedVisitorsNumber;
    //     var todayAvgCompare;
    //
    //         if (todayAvgNum > todayNum) {
    //             todayAvgCompare = "less than";
    //         } else if (todayAvgNum < todayNum) {
    //             todayAvgCompare = "higher than";
    //         } else {
    //             todayAvgCompare = "as";
    //         }
    //
    //     var newText_1 = document.createTextNode(todayNum);
    //     var newText_2 = document.createTextNode(todayAvgCompare);
    //     var todayNumText = document.getElementById("todayNumber" + i);
    //     var todayAvgNumText = document.getElementById("todayAvgNumber" + i);
    //     if(todayNumText === null) {
    //         break;
    //     } else {
    //         console.log(newText_1);
    //         console.log(data[i]);
    //         todayNumText.appendChild(newText_1);
    //         todayAvgNumText.appendChild(newText_2);
    //     }
    //
    // }
    //     if (i === data.length) { i = 1 }
};
request_Overview.send();

// using dailynumbers_API
request_DailyNumbers.onload = function () {
    // begin accessing JSON data here
    var data = JSON.parse(this.response);

    // for (j; j < data.length; j++ ) {
    // // write on the HTML FILE about Monthly visitor number of Overview API
    // var monthlyNum = data[i].thisMonthVisitorsNumber;
    //
    // // write on the HTML FILE about yearly visitor number of Overview API
    // var yearlyNum = data[1].thisYearVisitorsNumber;
    // var newText_4 = document.createTextNode(yearlyNum);
    // var newText_3 = document.createTextNode(monthlyNum);
    // var yearlyNumText = document.getElementById("yearlyNumber" + j);
    // var monthlyNumText = document.getElementById("monthlyNumber" + j);
    //     if(yearlyNumText === null) {
    //         break;
    //     } else {
    // monthlyNumText.appendChild(newText_3);
    // yearlyNumText.appendChild(newText_4);
    //     }
    // }
    // if (j === data.length) { j = 1 }
};
request_DailyNumbers.send();

