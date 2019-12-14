// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabTopics = document.querySelector('.topics');

axios
    .get('https://lambda-times-backend.herokuapp.com/topics')

    .then((res) => {
        const data = res.data;
        const topicsArray = tab(data);
        tabTopics.appendChild(topicsArray);
    })

    function tab () {
        const tabs = document.createElement('div');
        const topics = document.createElement('div');
        const title = document.createElement('span');

        tabs.classList.add('tabs');
        topics.classList.add('topics');
        title.classList.add('title');

        title.textContent = "TRENDING TOPICS:"

        tabs.appendChild(topics);
        topics.appendChild(title);


        return tabs;
    }



