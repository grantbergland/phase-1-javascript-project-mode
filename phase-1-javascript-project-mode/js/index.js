console.log('Hello and welcome to the code for the Phase I project for Flatiron School!')

const init = () => {
  document.getElementById('project-form');
  const projectform = document.getElementById('project-form');

//UNIQUE EVENT LISTENER #1

  projectform.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('input#search');
    // console.log(input.value)

// UNIQUE EVENT LISTENER #2

    projectform.addEventListener('submit', (event) => {
      event.preventDefault();
      alert("Now, click the name and you'll see your character's home world!");
      })
    return fetch(`https://swapi.dev/api/people/?search=${input.value}`)
    .then(response => response.json())
    .then(data => {
      //console.log(data)
      const character = document.querySelector('#character-list h4');
      
// UNIQUE EVENT LISTENER #3

      character.addEventListener('click', (event) => {
        return fetch (data.results[0].homeworld) 
        .then (response => response.json())
        .then(data => {
        //console.log(data.name)
        const homeworld = document.querySelector('#homeworld-list p')
        return homeworld.innerText = data.name
      })}
      )
      return character.innerText = data.results[0].name;
    })
  })
  }

  init()