// index.js
const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP('104.205.131.163', (error, data) => {
  
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Heres some data:', data);
});

fetchISSFlyOverTimes({ latitude: '55.1699396', longitude: '-118.7986152' }, (error, data) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }

  console.log('It worked! Heres the flight data:', data);

});