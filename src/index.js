import './css/style.css'
import './css/home.css'

import { loadAbout } from './Pages/About.js'
import { loadHome } from './Pages/Home.js'

const createHeader = () => {
    // Creating the header
    const header = document.createElement('div');
    header.id = 'header';

    // Creating the title
    const title = document.createElement('h1');
    title.textContent = "Vecchia Roma";
    title.addEventListener('click', () => {
        if(title.classList != 'activeTitle') {
            title.classList.add('activeTitle');

            document.getElementById('menu-btn').classList = '';
            document.getElementById('about-btn').classList = '';
            document.getElementById('contact-btn').classList = '';
            const main = document.getElementById('main');
            main.style.transform = 'scale(0)';

            setTimeout(() => {
                main.innerHTML = '';
                main.appendChild(loadHome());
                main.style.transform = 'scale(1)';
                main.style.alignItems = 'center';
            }, 300)
        }
    })
    title.id = 'title';
    header.appendChild(title);

    // Creating menu, about, contact buttons
    const headerButtons = document.createElement('ul');

    const menuBtn = document.createElement('li');
    menuBtn.id = 'menu-btn';
    menuBtn.textContent = 'Menu';

    const aboutBtn = document.createElement('li');
    aboutBtn.id = 'about-btn';
    aboutBtn.textContent = 'About';
    aboutBtn.addEventListener('click', () => {
        if(aboutBtn.classList != 'active') {
            aboutBtn.classList.add('active');

            document.getElementById('menu-btn').classList = '';
            document.getElementById('title').classList = '';
            document.getElementById('contact-btn').classList = '';

            const main = document.getElementById('main');
            main.style.transform = 'scale(0)';

            setTimeout(() => {
                main.innerHTML = '';
                main.appendChild(loadAbout());
                main.style.transform = 'scale(1)';
                main.style.alignItems = 'flex-start';
            }, 300)
        }
    });

    const contactBtn = document.createElement('li');
    contactBtn.id = 'contact-btn';
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

    main.appendChild(loadHome());
    
    return main;
}

document.body.appendChild(createHeader());
document.body.appendChild(loadMain());
document.body.appendChild(createFooter());