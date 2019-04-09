const PubSub = require('../helpers/pub_sub.js');
const PlanetSelectView = function(element){
  this.element = element;

};

PlanetSelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:all-planets-ready', (evt) => {
    const allPlanets = evt.detail;
    this.populate(allPlanets);
  });

  this.element.addEventListener('click', (evt) => {
    const clickedPlanet = evt.target.id;
    console.log('planet', clickedPlanet);
    PubSub.publish('PlanetSelectView:click', clickedPlanet);
  });
};

PlanetSelectView.prototype.populate = function(planetsData){
  console.dir(planetsData);
//   planetsData.forEach((planet, index) => {
//     const option = document.createElement('option');
//     option.textContent = animal.species;
//     option.value = index;
//     this.element.appendChild(option);
//   })
//
}

module.exports = PlanetSelectView;
