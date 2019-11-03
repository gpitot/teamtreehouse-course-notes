/**
 * Async/await is syntactic sugar for creating functions that return and wait for promises - it's a supplement to promises
 */


const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');

// Handle all fetch requests

async function getJSON(url) {
  // try contains all the code that needs to be executed
  try {
    const response = await fetch(url);
    return await response.json(); 
  } // catch will be executed if an error is thrown in the try block
  catch (error) {
    throw error; 
  }
}

async function getPeopleInSpace(url) {
  
  const peopleJSON = await getJSON(url); 

  const profiles = peopleJSON.people.map( async (person) => {
    const craft = person.craft;
    const profileJSON = await getJSON(wikiURL + person.name); 

    return { ...profileJSON, craft };
  });

  return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    section.innerHTML = `
      <img src=${person.thumbnail.source}>
      <span>${person.craft}</span>
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
    `;
  });
}

btn.addEventListener('click', (event) => {
  event.target.textContent = 'Loading...';

  getPeopleInSpace(astrosUrl)
  .then(generateHTML)
  .catch( e => {
    peopleList.innerHTML = `<h3>Something went wrong!</h3>`;
    console.error(e);
  })
  .finally( () => event.target.remove() )
  
});

/* Using try...catch and async/await in the event listener
btn.addEventListener('click', async (event) => {
  event.target.textContent = 'Loading...';
  try {
    const astros = await getPeopleInSpace(astrosUrl);
    generateHTML(astros);
  } catch(e) {
    astrosList.innerHTML = '<h3>Something went wrong!</h3>';
    console.error(e);    
  } finally {
    event.target.remove();
  }
});
*/