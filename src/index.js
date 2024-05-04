import './style.css'

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

    const footerText = document.createElement('p');
    footerText.textContent = 'All rights reserved © Sopu Matei';
    footer.appendChild(footerText);

    return footer;
}

document.body.appendChild(createHeader());
document.body.appendChild(createFooter());