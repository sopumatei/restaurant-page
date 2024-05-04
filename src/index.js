import './css/style.css'
import './css/home.css'
import pizzaImage1 from './img/pizza1.jpg'

const createHeader = () => {
    // Creating the header
    const header = document.createElement('div');
    header.id = 'header';

    // Creating the title
    const title = document.createElement('h1');
    title.textContent = "Vecchia Roma";
    title.id = 'title';
    header.appendChild(title);

    // Creating menu, about, contact buttons
    const headerButtons = document.createElement('ul');

    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';

    const aboutBtn = document.createElement('li');
    aboutBtn.textContent = 'About';

    const contactBtn = document.createElement('li');
    contactBtn.textContent = 'Contact';

    headerButtons.appendChild(menuBtn);
    headerButtons.appendChild(aboutBtn);
    headerButtons.appendChild(contactBtn);
    header.appendChild(headerButtons);

    return header;
}

const createFooter = () => {
    // Creating the footer
    const footer = document.createElement('div');
    footer.id = 'footer';

    // Creating the footer text
    const footerText = document.createElement('p');
    footerText.textContent = 'All rights reserved © Sopu Matei';
    footer.appendChild(footerText);

    return footer;
}

const loadMain = () => {
    // Creating the main content div
    const main = document.createElement('div');
    main.id = 'main';

    // Creating the welcome container
    const welcomeContainer = document.createElement('div');
    welcomeContainer.id = 'welcome-container';

    const textContainer = document.createElement('div');
    textContainer.id = 'welcome-text';

    // Creating the welcome title
    const welcomeTitle = document.createElement('h2');
    welcomeTitle.id = 'welcome-title';
    welcomeTitle.textContent = 'Welcome To Vecchia Roma';
    textContainer.appendChild(welcomeTitle);

    // Creating the welcome subtitle
    const welcomeSubtitle = document.createElement('p');
    welcomeSubtitle.id = 'welcome-subtitle';
    welcomeSubtitle.textContent = "Authentic flavours | Locally sourced"
    textContainer.appendChild(welcomeSubtitle);

    // Creating some dummy text
    const description = document.createElement('p');
    description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusamus ratione ducimus architecto quia reiciendis. Doloribus aspernatur dolorum, delectus eos illo ipsam architecto nesciunt. Repellendus nobis natus labore officia quam."
    textContainer.appendChild(description);

    // Creating the pizza image
    const image = document.createElement('img');
    image.src = pizzaImage1;
    image.id = 'home-image';

    welcomeContainer.appendChild(textContainer);
    welcomeContainer.appendChild(image);
    main.appendChild(welcomeContainer);
    
    return main;
}

document.body.appendChild(createHeader());
document.body.appendChild(loadMain());
document.body.appendChild(createFooter());