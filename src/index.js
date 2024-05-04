const loadPage = () => {
    const header = document.createElement('div');
    header.id = 'header';

    const title = document.createElement('h1');
    title.textContent = "Vecchia Roma";
    header.appendChild(title);

    return header;
}

document.body.appendChild(loadPage());