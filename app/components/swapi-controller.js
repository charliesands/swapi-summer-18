import SwapiService from "./swapi-service.js";

const swapiService = new SwapiService
let app = document.getElementById('app')

function draw(data) {
  console.log(data)
  app.innerHTML = `
  <div id="error"></div>
  <button onclick="app.controllers.swapi.getStarships()">
  Get Starships
  </button>
  <div id="starships"></div>
  <button onclick="app.controllers.swapi.getPeople()">
  Get People
  </button>
  <div id="people"></div>
  `
}

function drawStarships(data) {
  let starshipsElem = document.getElementById('starships')
  let template = ''
  data.results.forEach(starship => {
    template += `<div>
    Name: ${starship.name} <br>
    Model: ${starship.model}<br>
    Manufacturer: ${starship.manufacturer}<br>
    Cost in Credits: ${starship.cost_in_credits}<br>
    Length: ${starship.length}<br>
    Max Atmosphering Speed: ${starship.max_atmosphering_speed}<br>
    Crew: ${starship.crew}<br>
    Passengers: ${starship.passengers}<br>
    Cargo Capacity: ${starship.cargo_capacity}<br>
    Consumables: ${starship.consumables}<br>
    Hyperdrive Rating: ${starship.hyperdrive_rating}<br>
    MGLT: ${starship.MGLT}<br>
    Starship Class: ${starship.starship_class}<br>
    Pilots: ${starship.pilots}<br>
    Films: ${starship.films}<br>
    URL: ${starship.url}<br>
    <br>
    <br>
    </div>`
  })

  starshipsElem.innerHTML = template

}

function drawPeople(data) {
  let peopleElem = document.getElementById('people')
  let template = ''
  data.forEach(person => {
    template += `<div>
    Name: ${person.name}<br>
    Height: ${person.height}<br>
    Mass: ${person.mass}<br>
    Hair Color: ${person.hairColor}<br>
    Skin Color: ${person.skinColor}<br>
    Eye Color: ${person.eyeColor}<br>
    Birth Year: ${person.creationDate}<br>
    Gender: ${person.gender}<br>
    Homeworld: ${person.homeworld}<br>
    Films: ${person.films}<br>
    Species: ${person.species}<br>
    Vehicles: ${person.vehicles}<br>
    Starships: ${person.starships}<br>
    URL: ${person.url}<br>
    <br>
    <br>    
    </div>`
  })
  peopleElem.innerHTML = template
}

function drawError(error) {
  console.log(error)
  document.getElementById('error').innerHTML = error.message
}


export default class SwapiController {
  constructor() {
    draw()


  }

  getStarships() {
    console.log("HELLO FROM CONTROLLER")
    swapiService.getStarships(drawStarships, drawError)

  }

  getPeople() {
    console.log("HELLO FROM CONTROLLER")
    swapiService.getPeople(drawPeople, drawError)

  }

}