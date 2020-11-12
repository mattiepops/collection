const collection = [
    {
      title: 'The Secret Life of Walter Mitty',
      author: 'Ben Stiller',
      category: ['Adventure', 'Drama'],
      link: 'https://www.youtube.com/watch?v=HddkucqSzSM',
      description:  "A man living a dull life dreams up romantic and action-filled scenarios in order to escape from monotony. When his own job is threatened, he sets out on a real romantic and action-packed journey.",
      image: '/photos/movies-walter-12272013-superJumbo.jpg'
    },
  
    {
        title: 'Mr Nobody',
        author: 'Jaco Van Dormael',
        category: ['Sci-Fi', 'Drama'],
        link: 'https://www.youtube.com/watch?v=vXf3gVYXlHg',
        description:  "In 2092 the last mortal human on Earth reflects on his long past and thinks about the possible lives he might have led, based on once choice he did or did not make as a child.",
        image: '/photos/mr-nobody-review-jared-leto.jpg'
      },

      {
        title: 'Spirited Away',
        author: 'Hayao Miyazaki',
        category: ['Adventure', 'Anime', 'Fantasy'],
        link: 'https://www.youtube.com/watch?v=ByXuk9QqQkk',
        description:  "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
        image: '/photos/c66f29f6e575486aa40db56441fa503d.jpg'
      },

      {
        title: 'Good Will Hunting',
        author: 'Gus Van Sant',
        category: ['Indie', 'Drama', 'Romance'],
        link: 'https://www.youtube.com/watch?v=PaZVjZEFkRs"',
        description:  "Will Hunting, a genius in mathematics, solves all the difficult mathematical problems. When he faces an emotional crisis, he takes help from psychiatrist Dr Sean Maguireto, who helps him recover.",
        image: '/photos/Robin-Williams.jpg'
      },
      {
        title: 'The Wolf of Wallstreet',
        author: 'Martin Scorsese',
        category: ['Comedy', 'Drama'],
        link: 'https://www.youtube.com/watch?v=iszwuX1AK6A',
        description:  "Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",
        image: '/photos/wolf-of-wall-street.jpg'
      },
      {
        title: 'Donnie Darko',
        author: 'Richard Kelly',
        category: ['Thriller', 'Drama', 'Indie'],
        link: 'https://www.youtube.com/watch?v=bzLn8sYeM9o',
        description:  "Donnie Darko, an awkward teenager, befriends Frank, a figure in a bunny costume only he can see, who informs Donnie that the world will end in 28 days, 6 hours, 42 minutes, and 12 seconds.",
        image: '/photos/Donnie-Darko-does-it-hold-up-gq.jpg'
      },
      {
        title: 'Hacksaw Ridge',
        author: 'Mel Gibson',
        category: ['War', 'Drama', 'Historical'],
        link: 'https://www.youtube.com/watch?v=s2-1hz1juBI',
        description:  "The true story of Pfc. Desmond T. Doss, who won the Congressional Medal of Honor for his bravery, selflessness and compassion after he risked his life, during WWII -- without firing a shot -- to save 75 men in the Battle of Okinawa.",
        image: '/photos/Hacksaw-ridge-Netflix-1-810x456.jpg'
      },
      {
        title: 'Silence',
        author: 'Martin Scorsese',
        category: ['Drama', 'Historical'],
        link: 'https://www.youtube.com/watch?v=IqrgxZLd_gE',
        description:  "Rodrigues and Garupe, two Catholic missionaries, travel to Japan in search of their missing mentor, Ferreira, who is believed to have been promoting Catholicism by going against the law.",
        image: '/photos/silence-01456.jpg'
      },
      {
        title: 'Parasite',
        author: 'Bong Joon-ho',
        category: ['Thriller', 'Drama'],
        link: 'https://www.youtube.com/watch?v=isOGD_7hNIY',
        description:  "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        image: '/photos/Brody-Parasite.jpg'
      },
      {
        title: 'Into the Wild',
        author: 'Sean Penn',
        category: ['Adventure', 'Drama', 'Indie'],
        link: 'https://www.youtube.com/watch?v=XZG1FzyB8DI',
        description:  "Christopher McCandless, a young graduate, decides to renounce all his possessions and hitchhike across America. During his journey, he encounters several situations which change him as a person.",
        image: '/photos/into the wild.jpg'
      }
  ];



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
}

