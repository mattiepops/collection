// Beginning of filter list

// const dramaFilm = [];
//   for(let element of collection){
//     if(element.title.startsWith('I')){
//       dramaFilm.push(element)
//     }
//   }


document.getElementsByClassName(".search_input").addEventListener("search", myFunction());


function myFunction(pattern) {

    const results = [];
//   newSearch = document.getElementsByClassName(".search_input");
//   document.querySelector(collection)for(let element of collection){
  	if(element.title.match(pattern) || element.description.match(pattern))
      results.push(element)
}

const resultsDiv = document.querySelector('.eDiv');
resultsDiv.innerHTML = ''

// end of filter list

// beginning of the code for making the new 'card' elements 


document.querySelector(".container.card-container").innerHTML = "";

const mainContainer = document.querySelector(".container.card-container");

const newRow = document.createElement('div');
    newRow.className = 'row';
   
for (let element of collection){
    
    const newCol = document.createElement('div');
    newCol.className = 'col-md-6 col-xs col-lg-3 d-flex';

    const newCard = document.createElement('div');
    newCard.className = 'card text-center flex-fill';
    newCard.style.width = '18rem'

    const cardImage = document.createElement('img');
    cardImage.className = 'card-img-top';
    cardImage.src = element.image
    
    const divGenre = document.createElement('div');
    divGenre.className = 'genre';

    const aBadge = document.createElement('a');
    aBadge.className = 'badge'
    aBadge.textContent = element.category[0];

    const bBadge = document.createElement('a');
    bBadge.className = 'badge'
    bBadge.textContent = element.category[1];

    const cBadge = document.createElement('a');
    cBadge.className = 'badge'
    cBadge.textContent = element.category[2];

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = element.title

    const titleSec = document.createElement('h6');
    titleSec.className = 'card-title-secondary';
    titleSec.textContent = element.author;

    const paragraph = document.createElement('p');
    paragraph.className = 'card-text';
    paragraph.textContent = element.description;

    const link = document.createElement('a');
    link.className = 'fab fa-youtube';
    link.href = element.link;
    link.style.color = 'green';
    link.target = 'blank';

    link.onmouseover = function () {
        link.style.textDecoration = 'none';
        link.style.color = 'red'
    }

    link.onmouseleave = function () {
        link.style.color = 'green'
    }

    
    newCard.appendChild(cardImage);
    newCard.appendChild(divGenre);
    divGenre.appendChild(aBadge);
    divGenre.appendChild(bBadge);
    divGenre.appendChild(cBadge);

    newCard.appendChild(divGenre);
    newCard.appendChild(divCardBody);
    divCardBody.appendChild(title);
    divCardBody.appendChild(titleSec);
    divCardBody.appendChild(paragraph);
    divCardBody.appendChild(link);

    

    newCol.appendChild(newCard);

    newRow.appendChild(newCol);

    mainContainer.appendChild(newRow);

    resultsDiv.appendChild(mainContainer);
}

// end of the code for making the new 'card' elements 
