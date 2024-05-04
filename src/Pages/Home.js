import '../css/home.css'
import pizzaImage1 from '../img/pizza1.jpg'

export const loadHome = () => {
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
    
    return welcomeContainer;
}