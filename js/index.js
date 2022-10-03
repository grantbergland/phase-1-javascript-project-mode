//1. PART 1 of 5

//2. Once, a young and untested wizard named GRANT received his first project from the Gods of Code. He needed to utter a spell that could access an API, a kelson filled with knowledge. He needed to extract the information, move it like clay in his hands, and then present what he made in a single HTML webpage the Gods called "the frontend". He needed a way to store the data from an array so he started by chanting the following terms:

let allSuperheroes = []
let url = (`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)

const relatives = document.querySelector('#hero-list p')


//3.To prove his worth, the wizard needed his entire spell to be brought into being and add the other spells one at a time. Other wizards cast spells near GRANT but he ignored them, it was his time to speak. PHASE-1 was a complicated spell and the penalties were life and death, so he spoke the spell many times checking it each time to make sure it worked right but he first spoke one spell. That first spell had a name. Its name was 'DOMContentLoaded'

//*****UNIQUE EVENT LISTENER #1

window.addEventListener('DOMContentLoaded', async () => {
        console.log('Hello and welcome to the code for the Phase I project for Flatiron School!');
        const response = await fetch(url);
        const data_1 = await response.json();
        allSuperheroes = [...data_1];
        //console.log(allSuperheroes);
    });

//4. Some of the other wizards scoffed at his 'DOMContentLoaded' spell and said it is never really used anywhere and it's one of the stupid spells, but he used it anyway. The other wizards watched him, waiting for him to fail or succeed. He had the humility to check his work using another spell called console.log then with two wisks of his finger he made that part of the spell become transparent. He needed to absorb the power of the API so he cast 'fetch' and then took that power, iterated it, and stored it in a container he called allSuperheroes.

const init = () => {
    const form2 = document.getElementById('form2');

//5. With the preliminary work done, he spoke the words "init" and asked the gods to listen for his next question. He made the spell asynchronous so it could orbit the spell like rings around a planet, always there and ready to be seen. The other wizards mumbled he was doing it all wrong, he needed to write a series of functions not use "init" but GRANT knew there was more than one way to the throne room of the Gods.

//*******UNIQUE EVENT LISTENER #2

    form2.addEventListener('submit', async function (event) {
        event.preventDefault();
        const input = document.querySelector('input#search');
        console.log(input.value);
        const response = await fetch(`https://www.superheroapi.com/api.php/1216454192525968/search/${input.value}`);
        const data_1 = await response.json();
        //console.log(data_1);

//6. Names, powers, pictures, and legends flowed into data_1, a different place he used to hold the substance of what he drew from API. But, this one he held in his hand, like a single grain of sand as it glowed. Knowledge can be a beautiful thing, he thought, but it means little without a little direction. The most gentle of breezes is never felt if it blows the wrong way, so he cast "alert" and told the gods the next step.

        alert('Now, hover your mouse over RELATIVES and see a list of their family !');
        


//7. The Gods spoke  and asked for something called 'Batman', the spell returned three arrays that looked like this:
//{id: '69', name: 'Batman', powerstats: {…}, biography: {…}, appearance: {…}, …}
//{id: '70', name: 'Batman', powerstats: {…}, biography: {…}, appearance: {…}, …}2
//{id: '71', name: 'Batman II', powerstats: {…}, biography: {…}, appearance: {…}, …}
// so the wizard needed to make his spell choose only the first of the three and he invoked this first the most powerful of numbers, it was zero--both nothing and everything. 

        document.querySelector('.app-body-content-thumbnail').innerHTML = `
        <img src = "${data_1.results[0].image.url}">`;

//8. His querySelector spell extracted the parts he needed and they were returned to the gods using innerHTML and all that was became redefined. The other wizards turned back to their cauldrons, GRANT was not failing he just sent an image to the Gods. Not every wizard casts images at this tender stage of their inurement, perhaps he won't fail. How boring, they all thought. And he laid down the rest of his story thusly:

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
        
//9. The end was coming and GRANT knew some of the words he extracted from the API sounded like a long breath blended together and became nonsense so he cast "split" to make the words utter themselves slower.

//*****UNIQUE EVENT LISTENER # 3

//10. But, before he was done, there was one more task. GRANT needed a different way to listen, he needed to prove he was clever, so he cast 'mouseover' and used the hard language of the Booleans to make his spell happen but once and to let it be true.... {once: true}

        relatives.addEventListener('mouseover', () => {
            
//*****ARRAY ITERATION forEach

            relativesArray.forEach( r => {
                const famGraph = document.createElement("p")
                famGraph.innerText = r
                relatives.append(famGraph)})},
                {once: true});

//11. The forEach spell took each element he summoned and created it on the HTML page, again and  creating elements until there was no more. To be sure his spell was protected, he embedded  <input type="button" value="Reload Page" onClick="document.location.reload(true)"> in the last part of his HTML code so he could make it easy for the Gods to use his creation again and again.

    })}
  init()


//12. Then he invoked init() and it was finished. Basic spells, all together. But, they still worked. He still wanted to add a spell for if the Gods made a mistake when they requested the data using .catch(error => alert('Please check your spelling and try again')); but, it was time to finish. GRANT smiled, his face asking a question. The Gods shrugged and gave him the next book of spells called Phase-2 appeared in GRANT's hands. He opened the book and looked inside....
