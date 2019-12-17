// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const info = document.querySelector('.header-container')


function headerCreator() {

    //adding the elements to the function

    const header = document.createElement('div');
    const date = document.createElement('span');
    const h1Header = document.createElement('h1');
    const temp = document.createElement('span');

    //adding the classes to the elements

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //adding the text content to the elements

    date.textContent = 'March 28, 2019';
    h1Header.textContent = 'Lambda Times';
    temp.textContent = '98' + '&deg';

    //appending the child elements to the header element

    header.appendChild(date);
    header.appendChild(h1Header);
    header.appendChild(temp);

    return header;


}



