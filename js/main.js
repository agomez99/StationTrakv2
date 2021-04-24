// // Main JS COde here.
// $(document).ready(function() {
//   // map is reponsive. requires a page load will not re-size with a window size change
//   var width = $("#map").width() * 0.85,
//     height = width / 2;

//    var svg = d3
//     .select("#map")
//     .append("svg")
//     .attr("width", width)
//     .attr("height", height);

//   var projection = d3.geo
//     .equirectangular()
//     .scale(width / 1.89 / Math.PI)
//     .translate([width / 2, height / 2]);

//   var path = d3.geo.path().projection(projection);

//   var graticule = d3.geo.graticule();

//   var imgTransformFactor = -(width * 0.1) / 2;

//   d3.json("js/world-110m.json", function(error, world) {
//     svg
//       .style("background-color", "#1d87c5")
//       .style("border", "1px solid black")
//       .append("g")
//       .attr("class", "land")
//       .selectAll("path")
//       .data([topojson.object(world, world.objects.land)])
//       .enter()
//       .append("path")
//       .attr("d", path)
//       .attr("fill", "#1c8f4c");
//     svg
//       .append("g")
//       .attr("class", "boundary")
//       .selectAll("boundary")
//       .data([topojson.object(world, world.objects.countries)])
//       .enter()
//       .append("path")
//       .attr("fill", "#1c8f4c")
//       .attr("stroke", "#766951")
//       .attr("d", path);
//     svg
//       .append("g")
//       .attr("class", "graticule")
//       .selectAll("path")
//       .data(graticule.lines)
//       .enter()
//       .append("path")
//       .attr("d", path)
//       .attr("stroke", "grey")
//       .attr("opacity", "0.5");

//     getCurrentStationPosition();
//     getCurrentStationPosition2()
//     getCurrentStationPosition3()
//     getCurrentStationPosition4()

//   });

  
 
// //NOAA19
//   function getCurrentStationPosition() {
//     //console.log("Getting Station");
//     fetch(
//       "https://api.n2yo.com/rest/v1/satellite/positions/33591/29.5891833/-98.6270735/0/1/&apiKey=AFQ4CY-H89EGX-EFBHPT-4BII", {
//         mode: 'no-cors', // no-cors, *cors, same-origin

//       }
//     )
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         let coord = projection([
//           data.positions[0].satlongitude,
//           data.positions[0].satlatitude
//         ]);

//         svg
//           .append("image")
//           .attr("x", coord[0])
//           .attr("y", coord[1])
//           .attr("href", "images/NOAA19.png")

//           .attr("height", width * 0.1)
//           .attr("width", width * 0.1)
//           .attr(
//             "transform",
//             "translate(" + imgTransformFactor + "," + imgTransformFactor + ")"
//           );
//           svg
//           .append("image")
//           .attr("x", coord[0])
//           .attr("y", coord[1])
//           .attr("href", "img/marker.png")
//           .attr("height", width * 0.03)
//           .attr("width", width * 0.1)
//           .attr(
//             "transform",
//             "translate(" + imgTransformFactor + "," + imgTransformFactor + ")"
//           );
//       });
//   }

// //GOES13
//   function getCurrentStationPosition2() {
//     //console.log("Getting Station");
//     fetch(
//       "https://api.n2yo.com/rest/v1/satellite/positions/29155/29.5891833/-98.6270735/0/1/&apiKey=AFQ4CY-H89EGX-EFBHPT-4BII",{
//         mode: 'no-cors', // no-cors, *cors, same-origin

//       }
//     )
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         let coord = projection([
//           data.positions[0].satlongitude,
//           data.positions[0].satlatitude
//         ]);
        
//         svg
//           .append("image")
//           .attr("x", coord[0])
//           .attr("y", coord[1])
//           .attr("href", "images/AQUA.png")
//           .attr("height", width * 0.1)
//           .attr("width", width * 0.1)
//           .attr(
//             "transform",
//             "translate(" + imgTransformFactor + "," + imgTransformFactor + ")"
//           );
//           svg
//           .append("image")
//           .attr("x", coord[0])
//           .attr("y", coord[1])
//           .attr("href", "img/marker2.png")
//           .attr("height", width * 0.03)
//           .attr("width", width * 0.1)
//           .attr(
//             "transform",
//             "translate(" + imgTransformFactor + "," + imgTransformFactor + ")"
//           );
//       });



//   }

// //SES1
//   function getCurrentStationPosition3() {
//     //console.log("Getting Station");
//     fetch( "https://api.n2yo.com/rest/v1/satellite/positions/36516/29.5891833/-98.6270735/0/1/&apiKey=AFQ4CY-H89EGX-EFBHPT-4BII",{
//       mode: 'no-cors', // no-cors, *cors, same-origin

//     })
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         let coord = projection([
//           data.positions[0].satlongitude,
//           data.positions[0].satlatitude
//         ]);



//         svg
//           .append("image")
//           .attr("x", coord[0])
//           .attr("y", coord[1])
//           .attr("href", "images/SES1.jpg")
//           .attr("height", width * 0.1)
//           .attr("width", width * 0.1)
//           .attr(
//             "transform",
//             "translate(" + imgTransformFactor + "," + imgTransformFactor + ")"
//           );
//           svg
//           .append("image")
//           .attr("x", coord[0])
//           .attr("y", coord[1])
//           .attr("href", "img/marker3.png")
//           .attr("height", width * 0.03)
//           .attr("width", width * 0.1)
//           .attr(
//             "transform",
//             "translate(" + imgTransformFactor + "," + imgTransformFactor + ")"
//           );
//       });
//   }



// //TERRA
//   function getCurrentStationPosition4() {
//     //console.log("Getting Station");
//     fetch(
//       "https://api.n2yo.com/rest/v1/satellite/positions/25994/29.5891833/-98.6270735/0/1/&apiKey=AFQ4CY-H89EGX-EFBHPT-4BII",
//       {
//         mode: 'no-cors', // no-cors, *cors, same-origin

//       }
//     )
//       .then(response => {
//         return response.json();
//       })
//       .then(data => {
//         let coord = projection([
//           data.positions[0].satlongitude,
//           data.positions[0].satlatitude
//         ]);



//         svg
//           .append("image")
//           .attr("x", coord[0])
//           .attr("y", coord[1])
//           .attr("href", "images/TERRA.png")
//           .attr("height", width * 0.1)
//           .attr("width", width * 0.1)
//           .attr(
//             "transform",
//             "translate(" + imgTransformFactor + "," + imgTransformFactor + ")"
//           );
//           svg
//           .append("image")
//           .attr("x", coord[0])
//           .attr("y", coord[1])
//           .attr("href", "img/marker4.png")
//           .attr("height", width * 0.03)
//           .attr("width", width * 0.1)
//           .attr(
//             "transform",
//             "translate(" + imgTransformFactor + "," + imgTransformFactor + ")"
//           );
//       });
//   }





// });


