const PubSub = require('../helpers/pub_sub.js');

const PlanetInfoView = function(container){
  this.container = container;
};

PlanetInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Planets:selected-planet-ready', (evt) => {
    const planet = evt.detail;
    console.log('PlanetInfoView:', planet);
    this.render(planet);
  });
};

PlanetInfoView.prototype.render = function(planet){
  const infoParagraph = document.createElement('div');
  infoParagraph.classList.add('planet-info-item');
  const planetName = document.createElement('h2');
  planetName.textContent = planet.name;
  const planetOrbit = document.createElement('p');
  planetOrbit.textContent = `Orbit: ${planet.orbit}`;
  const planetVolume = document.createElement('p');
  planetVolume.textContent = `Volume: ${planet.volume}`;
  const planetDay = document.createElement('p');
  planetDay.textContent = `Day: ${planet.day}`;
  const planetSurfaceArea = document.createElement('p');
  planetSurfaceArea.textContent = `Surface area: ${planet.surfaceArea}`;
  const planetGravity = document.createElement('p');
  planetGravity.textContent = `Gravity: ${planet.gravity}`;
  const planetMoons = document.createElement('p');
  planetMoons.textContent = `Moons: ${planet.moons}`;

  infoParagraph.appendChild(planetName);
  infoParagraph.appendChild(planetOrbit);
  infoParagraph.appendChild(planetVolume);
  infoParagraph.appendChild(planetDay);
  infoParagraph.appendChild(planetSurfaceArea);
  infoParagraph.appendChild(planetGravity);
  infoParagraph.appendChild(planetMoons);

  const planetImage = document.createElement('img');
  planetImage.classList.add('planet-img');
  planetImage.src = planet.image;
  infoParagraph.appendChild(planetImage);

  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};
module.exports = PlanetInfoView;
