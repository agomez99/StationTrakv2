

$(document).ready(function () {


  fetch('./crew.JSON').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
console.log(data)

    var number = data['number'];
    $('#spacepeeps').html(number + "  People currently in space"+ '<hr>') ;

    data['people'].forEach(function (d) {
         $('#astronames').append('<li>' + d['name'] +'<br>'+"Satellite:"+ d['craft']+ '</li>'+ '<hr>');
    });


}).catch(err => {
  // Do something for an error here
});



// var number = data['number'];
// $('#spacepeeps').html(number + "  People currently in space"+ '<hr>') ;

// data['people'].forEach(function (d) {
//      $('#astronames').append('<li>' + d['name'] +'<br>'+"Satellite:"+ d['craft']+ '</li>'+ '<hr>');
// });






  var d = new Date();
  document.getElementById("currentT").innerHTML = d;

  });





