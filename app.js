let quotes = [
    `I am not afraid of storms, for I am learning how to sail my ship.`,
    `It's the possibility of having a dream come true that makes life interesting.`,
    `There is always something left to love.`,
    `Time moves slowly, but passes quickly.`,
    `Now that I knew fear, I also knew it was not permanent. As powerful as it was, its grip on me would loosen. It would pass.`,
    `It is only with the heart that one can see rightly; what is essential is invisible to the eye.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
  
    // define title
  document.querySelector('#main-title').textContent = "Ying's Bookshelf"
  
    // define backgroundColor of body
  document.querySelector('body').style.backgroundColor = '#FFF8E5'
  
    // add booklist item 
  const li = document.createElement('li')
  li.classList.add('list_item')
  li.innerHTML = `<a href ="https://www.amazon.com/Book-Woman-Troublesome-Creek-Novel-ebook/dp/B07LGD67ZZ/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1667277535&sr=1-1-a094db1c-5033-42c6-82a2-587d01f975e8" class="link">The Book Woman of Troublesome Creek</a>`

  document.querySelector('.booklist').appendChild(li)
  
    // add my favorite book item and their intro
  const favBooks = document.createElement('div')
  favBooks.classList.add('myFavItem');
  const heading = document.createElement('h2')
  heading.textContent = 'The Little Prince'
  const intro = document.createElement('p')
  intro.classList.add('intro')
  intro.textContent = "In this classic French children's book, a young prince meets a pilot whose plane has crashed in the desert, who begins to tell him his story of traveling across various planets and all he had seen and learned along the way.'The Little Prince' is for readers of all ages who wish to reminisce upon the nostalgic innocence of childhood.";
  favBooks.appendChild(heading);
  favBooks.appendChild(intro);
  

  const favList = document.querySelector('.book_intro')
  favList.appendChild(favBooks);
 
  
  
    // addEventListener to display random quote
  document.querySelector('#quote-title').addEventListener('click', (event) => {
    randomQuote()
  });
  
    // add hover effect on favbooks
  
  document.querySelectorAll('.myFavItem').forEach((item) => {
    item.addEventListener('mouseenter', (evt) => {
    evt.stopPropagation()
    evt.currentTarget.classList.toggle('lightgreen');
    evt.currentTarget.classList.toggle('textWhite');
    })
  })
 
  

});