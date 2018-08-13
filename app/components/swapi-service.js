import Person from "../models/Person.js";
import Starship from "../models/Starship.js"

let people = {}

export default class SwapiService {



  getPeople(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(res => {
        let myPeople = res.results.map(rawPerson => {
          let person = new Person(rawPerson)
          people[person.id] = person
          return person
        })
        draw(myPeople)
      })
      .catch(drawError)

    console.log("HERE I AM")
  }

  getStarships(draw, drawError) {
    console.log("HELLO FROM SWAPISERVICE")
    fetch('https://swapi.co/api/starships')
      .then(res => res.json())
      .then(draw)
      .catch(drawError)

    console.log("HERE I AM")
  }

}