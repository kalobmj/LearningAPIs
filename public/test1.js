const jsonText = `{
    "browsers": {
      "firefox": {
        "name": "Firefox",
        "pref_url": "about:config",
        "releases": {
          "1": {
            "release_date": "2004-11-09",
            "status": "retired",
            "engine": "Gecko",
            "engine_version": "1.7"
          }
        }
      }
    }
  }`;
  
  console.log(JSON.parse(jsonText));

  // we will make a simple star wars api, this will take in the info and we will use all and interlock them. we can possibly learn classes in this mini project aswell.

// C:\Users\kalob\OneDrive\Desktop\starWarsApi\starWars.js

class PersonOfStarWars {
  constructor(height, personality, num1, num2) {
      this.height = height
      this.personality = personality
      this.num1 = num1
      this.num2 = num2
  }

  static secretName = 'darth vader';
  perfectLightsaber(n1, n2) {
      return `My perfect Lightsaber contains ${n1 * n2} crytals.`
  }

}

const Anakin = new PersonOfStarWars(172, 'happy', 10, 10);

const apiCallRoot = 'https://swapi.dev/api/';

const apiStarships9 = `${apiCallRoot}starships/9/`;
console.log({ apiStarships9 })

fetch(apiStarships9)
  .then(res => res.json())
  .then(data => {
      console.log({ data })
      console.log('first data element: ', data[0])
      console.log(data.name)
      console.log(data.MGLT)
      console.log(data.crew)
      for (const props in data) {
          console.log(props)
      }
  })

  