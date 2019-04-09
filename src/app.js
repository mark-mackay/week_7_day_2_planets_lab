const planetsData = require('./data/planets.js');
const SolarSystem = require('./models/solar_system.js');
const PlanetSelectView = require('./views/planet_select_view.js');
const PlanetInfoView = require('./views/planet_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const planetsDataModel = new SolarSystem(planetsData);
  planetsDataModel.bindEvents();

  const selectElement = document.querySelector('.planets-menu');
  const planetNavBar = new PlanetSelectView(selectElement);
  planetNavBar.bindEvents();

  const infoDiv = document.querySelector('.planet-details')
  const planetInfoDisplay = new PlanetInfoView(infoDiv);
  planetInfoDisplay.bindEvents();
});
