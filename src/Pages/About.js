import pizzaOven from '../img/pizza-oven.jpg'
import '../css/about.css'

export const loadAbout = () => {
    // Crating the about container
    const aboutContainer = document.createElement('div');
    aboutContainer.id = 'about-container';

    // Creating the about image
    const image = document.createElement('img');
    image.id = 'about-image';
    image.src = pizzaOven;
    aboutContainer.appendChild(image);

    // Creating the title
    const title = document.createElement('h2');
    title.id = 'about-title';
    title.textContent = 'For the love of pizza';
    aboutContainer.appendChild(title);

    // Creating the description
    const description = document.createElement('p');
    description.id = 'about-description';
    description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugit sed, minus aliquid ut consequuntur aspernatur dolore iste, aut obcaecati corporis iure quia repellat nisi fuga vitae qui sapiente accusantium.";
    aboutContainer.appendChild(description);

    return aboutContainer;
}