

$(document).ready(function () {
  //TODAY APOD
  var space2 =
    "https://api.nasa.gov/planetary/apod?api_key=MpKzhyBTQD2LoeNVs09k3Rl9o9zo84tECIPVFsyK";


//NOAA19
const NOAA19 = "33591";
//ISS
const ISS ="25544";
//SES1
const SES1 = "36516"

 let satName1 = NOAA19;
 let satName2 = ISS;
 let satName3 = SES1;




  let getCoords ="https://www.n2yo.com/rest/v1/satellite/positions/"+satName1+"/41.702/-76.014/0/300/&apiKey=AFQ4CY-H89EGX-EFBHPT-4BII";
  let getCoords2 ="https://www.n2yo.com/rest/v1/satellite/positions/"+satName2+"/41.702/-76.014/0/300/&apiKey=AFQ4CY-H89EGX-EFBHPT-4BII";
  let getCoords3 ="https://www.n2yo.com/rest/v1/satellite/positions/"+satName3+"/41.702/-76.014/0/300/&apiKey=AFQ4CY-H89EGX-EFBHPT-4BII";

  var cords = getCoords;
  var cords2 = getCoords2;
  var cords3 = getCoords3;



  $.ajax({
    url: space2,
    method: "GET",
  }).then(function (response) {
    $("#spaceTitle").html(response.title);
    $("#Sdate").html(response.date);
    $("#info").html(response.explanation);
    $("#spaceImg").attr("src", response.url);
  });


  $.ajax({
    url: cords,
    method: "GET",
  }).then(function (response) {
    $("#satName").html( response.info.satname);
    for (i in response.positions) {
      y = response.positions[i].satlatitude;
      x = response.positions[i].satlongitude;
    }
    $("#positionx").html("latitude: " + x )
    $("#positiony").html("longitude: " + y)
    $("#alt").html("Altitude: "+ response.positions[2].sataltitude)

    var times = response.positions[0].timestamp;
    var ts = times;
    var ts_ms = ts * 1000;
    var date_ob = new Date(ts_ms);
    var year = date_ob.getFullYear();
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var date = ("0" + date_ob.getDate()).slice(-2);
    var hours = ("0" + date_ob.getHours()).slice(-2);
    var minutes = ("0" + date_ob.getMinutes()).slice(-2);
    var seconds = ("0" + date_ob.getSeconds()).slice(-2);
    $("#timeStamp").html(
      "Current Time: " +
      year +
      "-" +
      month +
      "-" +
      date +
      " " +
      hours +
      ":" +
      minutes +
      ":" +
      seconds
    );
  });

  $.ajax({
    url: cords2,
    method: "GET",
  }).then(function (response) {
    $("#satName2").html( response.info.satname);
    for (i in response.positions) {
      y = response.positions[i].satlatitude;
      x = response.positions[i].satlongitude;
    }
    $("#positionx2").html("latitude: " + x )
    $("#positiony2").html("longitude: " + y)
    $("#alt2").html("Altitude: "+ response.positions[2].sataltitude)

});
$.ajax({
  url: cords3,
  method: "GET",
}).then(function (response) {
  $("#satName3").html(response.info.satname);
  for (i in response.positions) {
    y = response.positions[i].satlatitude;
    x = response.positions[i].satlongitude;
  }
  $("#positionx3").html("latitude: " + x )
    $("#positiony3").html("longitude: " + y)
    $("#alt3").html("Altitude: "+ response.positions[2].sataltitude)

});
});



