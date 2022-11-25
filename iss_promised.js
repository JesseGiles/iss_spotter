const request = require('request-promise-native');


const fetchMyIP = function() {
  return request("https://api.ipify.org/?format=json");
};

const fetchCoordsByIP = function(body) {
  const myIP = JSON.parse(body).ip;
  return request(`http://ipwho.is/${myIP}`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  return request(`https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`)
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then((data) => {
    const { response } = JSON.parse(data);
    return response;
  });
}


module.exports = { nextISSTimesForMyLocation };

