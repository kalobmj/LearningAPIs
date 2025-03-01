// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(response => console.log(response))
//   .then(response => response.json())
//   .then(data => {
//     console.log("Name:", data.name);
//     console.log("Email:", data.email);
//     console.log("Company:", data.company.name);
//     console.log("City:", data.address.city);
//     document.getElementById('res-display').innerText = JSON.stringify(data);
//     console.log({data})
//     console.log(JSON.stringify(data))
//     console.log({data})
//   })
//   .catch(error => console.error("Error:", error));

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json()) // Converts the body to JSON
  .then(data => {
    console.log(data);
    console.log(typeof data);
    document.getElementById('res-display').innerText = JSON.stringify(data);

  }) // Logs the final data
  .catch(error => console.error("Error:", error));

// ## consult documentation

// need to res.json() when data comes back => .then(res => res.json())

// data comes back as string => JSON.parse(data)
// data comes back as object means u can work directly

Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
    fetch("https://jsonplaceholder.typicode.com/users/2").then(res => res.json())
  ])
  .then(([user1, user2]) => {
    console.log("User 1:", user1);
    console.log("User 2:", user2);
    console.log(JSON.stringify(user1))
  })
  .catch(error => console.error("Error:", error));
  
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

  // HTTP/1.0 200 OK
  // Content-Type: application/json
  // {
  //     "films": "https://swapi.dev/api/films/",
  //     "people": "https://swapi.dev/api/people/",
  //     "planets": "https://swapi.dev/api/planets/",
  //     "species": "https://swapi.dev/api/species/",
  //     "starships": "https://swapi.dev/api/starships/",
  //     "vehicles": "https://swapi.dev/api/vehicles/"
  // }

  // async function foo() {
//         let obj;
    
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    
//         obj = await res.json();
    
//         console.log(obj)
//     }
    
//     foo();

//     .json() -> method used on response object from fetch call. parses response body and returns js object.
//     JSON.parse() -> parses json string and converts to JSON
//     JSON.stringify -> converts JS object to a single string
    
//     Attributes:
    
//     films string -- The URL root for Film resources
//     people string -- The URL root for People resources
//     planets string -- The URL root for Planet resources
//     species string -- The URL root for Species resources
//     starships string -- The URL root for Starships resources
//     vehicles string -- The URL root for Vehicles resources
    
    // HTTP/1.0 200 OK
    // Content-Type: application/json
    // {
    //     "films": "https://swapi.dev/api/films/",
    //     "people": "https://swapi.dev/api/people/",
    //     "planets": "https://swapi.dev/api/planets/",
    //     "species": "https://swapi.dev/api/species/",
    //     "starships": "https://swapi.dev/api/starships/",
    //     "vehicles": "https://swapi.dev/api/vehicles/"
    // }
    
    // Example request:
    // http https://swapi.dev/api/people/1/
    
    // Example response:
    // HTTP/1.0 200 OK
    // Content-Type: application/json
    // {
    //     "birth_year": "19 BBY",
    //     "eye_color": "Blue",
    //     "films": [
    //         "https://swapi.dev/api/films/1/",
    //         ...
    //     ],
    //     "gender": "Male",
    //     "hair_color": "Blond",
    //     "height": "172",
    //     "homeworld": "https://swapi.dev/api/planets/1/",
    //     "mass": "77",
    //     "name": "Luke Skywalker",
    //     "skin_color": "Fair",
    //     "created": "2014-12-09T13:50:51.644000Z",
    //     "edited": "2014-12-10T13:52:43.172000Z",
    //     "species": [
    //         "https://swapi.dev/api/species/1/"
    //     ],
    //     "starships": [
    //         "https://swapi.dev/api/starships/12/",
    //         ...
    //     ],
    //     "url": "https://swapi.dev/api/people/1/",
    //     "vehicles": [
    //         "https://swapi.dev/api/vehicles/14/"
    //         ...
    //     ]
    // }
    