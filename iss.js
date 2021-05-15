await currentPosition();

// Change this to use your location in this example
var myLocation = "San Francisco, CA";

await nextPass(myLocation);
console.log(myLocation)
await numberInSpace();

var people = await peopleInSpace();

people.map(function(person) {
    return person.name + " (" + person.craft + ")";
});

async function currentPosition() {
    return JSON.parse(await require("request-promise")("http://api.open-notify.org/iss-now.json")).iss_position;
};

async function nextPass(location) {
    var geocode = require('notebook')('capicue/geocode/5.0.0');
 
    return geocode.simpleLookup(location).then(function(coordinates) {
        var options = {lat: coordinates.lat, lon: coordinates.lng};
        return require("request-promise")('http://api.open-notify.org/iss-pass.json', { qs: options });
    }).then(function(passResult) {
        var timestamp = JSON.parse(passResult).response[0].risetime;
        return require("moment").unix(timestamp).fromNow();
    });
};

async function numberInSpace() {
    return JSON.parse(await require("request-promise")('http://api.open-notify.org/astros.json')).number;
};
async function peopleInSpace() {
    return JSON.parse(await require("request-promise")("http://api.open-notify.org/astros.json")).people;
};
module.exports = {
    currentPosition: currentPosition,
    nextPass: nextPass,
    numberInSpace: numberInSpace,
    peopleInSpace: peopleInSpace
};