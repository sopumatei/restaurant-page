import './css/style.css'
import './css/home.css'

import { loadAbout } from './Pages/About.js'
import { loadHome } from './Pages/Home.js'
import { loadMenu } from './Pages/Menu.js'
import { loadContact } from './Pages/Contact.js'

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
    menuBtn.addEventListener('click', () => {
        if(menuBtn.classList != 'active') {
            menuBtn.classList.add('active');

            document.getElementById('about-btn').classList = '';
            document.getElementById('title').classList = '';
            document.getElementById('contact-btn').classList = '';

            const main = document.getElementById('main');
            main.style.transform = 'scale(0)';

            setTimeout(() => {
                main.innerHTML = '';
                main.appendChild(loadMenu());
                main.style.transform = 'scale(1)';
                main.style.alignItems = 'flex-start';
            }, 300)
        }
    });

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
    contactBtn.addEventListener('click', () => {
        if(contactBtn.classList != 'active') {
            contactBtn.classList.add('active');

            document.getElementById('menu-btn').classList = '';
            document.getElementById('title').classList = '';
            document.getElementById('about-btn').classList = '';

            const main = document.getElementById('main');
            main.style.transform = 'scale(0)';

            setTimeout(() => {
                main.innerHTML = '';
                main.appendChild(loadContact());
                main.style.transform = 'scale(1)';
                main.style.alignItems = 'center';
            }, 300)
        }
    });

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

    // Creating the footer buttons
    const footerButtons = document.createElement('ul');

    const homeBtn = document.createElement('li');
    homeBtn.textContent = 'Home';
    homeBtn.addEventListener('click', () => {
        if(document.getElementById('title').classList != 'activeTitle') {
            document.getElementById('title').classList.add('activeTitle');

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
    });
    footerButtons.appendChild(homeBtn);

    const menuBtn = document.createElement('li');
    menuBtn.textContent = 'Menu';
    menuBtn.addEventListener('click', () => {
        if(document.getElementById('menu-btn').classList != 'active') {
            document.getElementById('menu-btn').classList.add('active');

            document.getElementById('about-btn').classList = '';
            document.getElementById('title').classList = '';
            document.getElementById('contact-btn').classList = '';

            const main = document.getElementById('main');
            main.style.transform = 'scale(0)';

            setTimeout(() => {
                main.innerHTML = '';
                main.appendChild(loadMenu());
                main.style.transform = 'scale(1)';
                main.style.alignItems = 'flex-start';
            }, 300)
        }
    });
    footerButtons.appendChild(menuBtn);

    const aboutBtn = document.createElement('li');
    aboutBtn.textContent = 'About';
    aboutBtn.addEventListener('click', () => {
        if(document.getElementById('about-btn').classList != 'active') {
            document.getElementById('about-btn').classList.add('active');

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
    footerButtons.appendChild(aboutBtn);

    const contactBtn = document.createElement('li');
    contactBtn.textContent = 'Contact';
    contactBtn.addEventListener('click', () => {
        if(document.getElementById('contact-btn').classList != 'active') {
            document.getElementById('contact-btn').classList.add('active');

            document.getElementById('menu-btn').classList = '';
            document.getElementById('title').classList = '';
            document.getElementById('about-btn').classList = '';

            const main = document.getElementById('main');
            main.style.transform = 'scale(0)';

            setTimeout(() => {
                main.innerHTML = '';
                main.appendChild(loadContact());
                main.style.transform = 'scale(1)';
                main.style.alignItems = 'center';
            }, 300)
        }
    });
    footerButtons.appendChild(contactBtn);
    footer.appendChild(footerButtons);

    // Creating the footer text
    const footerText = document.createElement('p');
    footerText.innerHTML = 'Created by <a href="https://github.com/sopumatei" target="_blank">Sopu Matei</a>';
    footer.appendChild(footerText);

    // Creating the rights text
    const rightsText = document.createElement('p');
    rightsText.innerHTML = 'Website inspired from <a href="https://www.vecchiaroma.ro" target="_blank">www.vecchiaroma.ro</a>';
    footer.appendChild(rightsText);

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