// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleCards = document.querySelector('.cards-container');

axios

    .get('https://lambda-times-backend.herokuapp.com/articles')

    .then((res) => {
        const articleArray = res.data;
        const articleList = articleArray.map((article) => {
            return article;
        })
        return articleList;
    })
    .then((articleList) => {
        articleList.forEach((article) => {
            axios.get(`https://lambda-times-backend.herokuapp.com/${article.headline} ${article.authorPhoto} ${article.authorName}`)
            .then((res) => {
                const data = res.data;
                const newArticle = articleCreator(data);
                articleCards.appendChild(newArticle);
            })
        })
    })
    .catch((err) => {
        console.log(err);
    })



    function articleCreator(headline, authorPhoto, authorName) {
        const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
        const imgContainer = document.createElement('div');
        const authorImg = document.createElement('img');
        const authorName = document.createElement('span');

        card.classList.add('card');
        headline.classList.add('headline');
        author.classList.add('author');
        imgContainer.classList.add('img-container');

        headline.textContent = `headline: ${obj.headline}`;
        imgContainer.href = obj.authorPhoto;
        authorImg.textContent = obj.authorPhoto;
        authorName.textContent = `By: ${obj.authorName}`;

        card.appendChild(headline);
        card.appendChild(author);
        author.appendChild(imgContainer);
        imgContainer.appendChild(authorImg);
        imgContainer.appendChild(authorName);

        return card;
    }