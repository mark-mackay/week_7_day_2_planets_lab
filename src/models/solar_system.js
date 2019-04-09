const PubSub = require('../helpers/pub_sub.js');
const SolarSystem = function(planets) {
  this.planets = planets;
};
SolarSystem.prototype.bindEvents = function(){
  PubSub.publish('Planets:all-planets-ready', this.planets);

  PubSub.subscribe('PlanetSelectView:click', (evt) => {
    const clickedPlanet = evt.detail;
    this.publishPlanetDetail(clickedPlanet);

  });
};

SolarSystem.prototype.publishPlanetDetail = function(clickedPlanet){
  const activePlanet = this.planets.find((planet) => planet.name === clickedPlanet);
  PubSub.publish('Planets:selected-planet-ready', activePlanet);
};


module.exports = SolarSystem;
