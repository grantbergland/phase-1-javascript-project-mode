//FLATIRON SCHOOL PHASE-1 PROJECT



//UNIQUE EVENT LISTENER #1
window.addEventListener('load', () => {
    console.log('Hello and welcome to the code for the Phase I project for Flatiron School!');
});



//UNIQUE EVENT LISTENER #2
document.addEventListener('keydown', (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
        document.body.style.backgroundColor = 'salmon'
      //console.log('up arrow pressed')
    } else if (e.keyCode === 40) {
        document.body.style.backgroundColor = 'aqua'
      //console.log('down arrow pressed')
    } else if (e.keyCode === 37) {
        document.body.style.backgroundColor = 'DarkSeaGreen'
      //console.log('left arrow pressed')
    } else if (e.keyCode === 39) {
        document.body.style.backgroundColor = 'LightGoldenRodYellow'
      //console.log('right arrow pressed')
    }
  })



const init = () => {
    const form2 = document.getElementById('form2');



//UNIQUE EVENT LISTENER #3
    form2.addEventListener('submit', async function (event) {
        event.preventDefault();
        const input = document.querySelector('input#search');
        const response = await fetch(`https://www.superheroapi.com/api.php/1216454192525968/search/${input.value}`);
        const data_1 = await response.json();
        alert('Now, hover your mouse over RELATIVES and see a list of their family !');
    
        

//DATA POPULATION
        document.querySelector('.app-body-content-thumbnail').innerHTML = `
        <img src = "${data_1.results[0].image.url}">`;
        document.querySelector('.name').textContent = data_1.results[0].name;
        document.querySelector('.biography').innerHTML = `
    <li>
        <span><STRONG>FULL NAME:</STRONG></span>
        <span>${data_1.results[0].biography['full-name']}</span>
    </li>
    <li>
        <span><STRONG>ALTER-EGOS:</STRONG></span>-
        <span>${data_1.results[0].biography['alter-egos']}</span>
    </li>
    <li>
        <span><STRONG>ALIASES:</STRONG></span>
        <span>${data_1.results[0].biography['aliases']}</span>
    </li>
    <li>
        <span><STRONG>PLACE OF BIRTH:</STRONG></span>
        <span>${data_1.results[0].biography['place-of-birth']}</span>
    </li>
    <li>
        <span><STRONG>FIRST APPEARANCE:</STRONG></span>
        <span>${data_1.results[0].biography['first-appearance']}</span>
    </li>
    <li>
        <span><STRONG>PUBLISHER:</STRONG></span>
        <span>${data_1.results[0].biography['publisher']}</span>
    </li>
    `;
    let relativesArray = data_1.results[0].connections.relatives.split(", ")
    //console.log("relativesArray", relativesArray)



//UNIQUE EVENT LISTENER #4 BONUS
    relatives.addEventListener('mouseover', () => {


        
//ARRAY ITERATION
            relativesArray.forEach( r => {
                const famGraph = document.createElement("p")
                famGraph.innerText = r
                relatives.append(famGraph)})},
                {once: true});
    })}
  init()
  
  const relatives = document.querySelector('#hero-list p')