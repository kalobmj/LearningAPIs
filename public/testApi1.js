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
  