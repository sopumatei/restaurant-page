import '../css/menu.css'
import pizzaALaChef from '../img/Pizza_A_LA_CHEF.jpg'
import pizzaCapriciosa from '../img/Pizza_CAPRICIOSA.jpg'
import pizzaFunghi from '../img/Pizza_FUNGHI.jpg'
import pizzaKebab from '../img/Pizza_KEBAB.jpg'
import pizzaPollo from '../img/Pizza_POLLO.jpg'
import pizzaQuatroStagioni from '../img/Pizza_QUATRO_STAGIONI.jpg'

export const loadMenu = () => {
    // Crating the menu container
    const menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    // Creating the title
    const title = document.createElement('h2');
    title.id = 'menu-title';
    title.textContent = 'Menu';
    menuContainer.appendChild(title);

    // Creating the menu grid
    const menuGrid = document.createElement('div');
    menuGrid.id = 'menu-grid';

    // Creating the menu elements
    
    const option1 = document.createElement('div');
    const image1 = document.createElement('img');
    image1.src = pizzaALaChef;
    const textContainer1 = document.createElement('div');
    textContainer1.classList.add('textContainer');
    const option1Title = document.createElement('h3');
    const option1Description = document.createElement('p');
    const option1Price = document.createElement('h4');
    option1Title.textContent = 'PIZZA A LA CHEF';
    option1Description.textContent = 'SPECIAL DOUGH, TOMATO SAUCE, MOZZARELLA, RAW PROSCIUTTO, RUCOLA, PARMESAN, CHERRY TOMATOES';
    option1Price.textContent = '10€';
    option1.classList.add('menuItem');
    textContainer1.appendChild(option1Title);
    textContainer1.appendChild(option1Description);
    textContainer1.appendChild(option1Price);
    option1.appendChild(image1);
    option1.appendChild(textContainer1);

    const option2 = document.createElement('div');
    const image2 = document.createElement('img');
    image2.src = pizzaCapriciosa;
    const textContainer2 = document.createElement('div');
    textContainer2.classList.add('textContainer');
    const option2Title = document.createElement('h3');
    const option2Description = document.createElement('p');  
    const option2Price = document.createElement('h4');
    option2Title.textContent = 'PIZZA CAPRICIOSA';
    option2Description.textContent = 'SPECIAL DOUGH, TOMATO SAUCE, MOZZARELLA, HAM, MUSHROOMS, OLIVES';
    option2Price.textContent = '12€';
    option2.classList.add('menuItem');
    textContainer2.appendChild(option2Title);
    textContainer2.appendChild(option2Description);
    textContainer2.appendChild(option2Price);
    option2.appendChild(image2);
    option2.appendChild(textContainer2);

    const option3 = document.createElement('div');
    const image3 = document.createElement('img');
    image3.src = pizzaFunghi;
    const textContainer3 = document.createElement('div');
    textContainer3.classList.add('textContainer');
    const option3Title = document.createElement('h3');
    const option3Description = document.createElement('p');
    const option3Price = document.createElement('h4');
    option3Title.textContent = 'PIZZA CRUDO E FUNGHI PORCINI';
    option3Description.textContent = 'SPECIAL DOUGH, TOMATO SAUCE, MOZZARELLA, MUSHROOMS, PROSCIUTTO CRUDO';
    option3Price.textContent = '15€';
    option3.classList.add('menuItem');
    textContainer3.appendChild(option3Title);
    textContainer3.appendChild(option3Description);
    textContainer3.appendChild(option3Price);
    option3.appendChild(image3);
    option3.appendChild(textContainer3);

    const option4 = document.createElement('div');
    const image4 = document.createElement('img');
    image4.src = pizzaKebab;
    const textContainer4 = document.createElement('div');
    textContainer4.classList.add('textContainer');
    const option4Title = document.createElement('h3');
    const option4Description = document.createElement('p');
    const option4Price = document.createElement('h4');
    option4Title.textContent = 'PIZZA KEBAB';
    option4Description.textContent = 'SPECIAL DOUGH, TOMATO SAUCE, MOZZARELLA, CHERRY TOMATOES, LAMB, WHITE CABBAGE, RED CABBAGE, BAKED HOT PEPPERS, MAYONNAISE SAUCE WITH GARLIC, FRESH POTATOES';
    option4Price.textContent = '16€';
    option4.classList.add('menuItem');
    textContainer4.appendChild(option4Title);
    textContainer4.appendChild(option4Description);
    textContainer4.appendChild(option4Price);
    option4.appendChild(image4);
    option4.appendChild(textContainer4);

    const option5 = document.createElement('div');
    const image5 = document.createElement('img');
    image5.src = pizzaPollo;
    const textContainer5 = document.createElement('div');
    textContainer5.classList.add('textContainer');
    const option5Title = document.createElement('h3');
    const option5Description = document.createElement('p');
    const option5Price = document.createElement('h4');
    option5Title.textContent = 'PIZZA POLLO ITALIANO';
    option5Description.textContent = 'SPECIAL DOUGH,GRAN CUCINA,MOZZARELLA,PIEPT DE PUI,ROSII CHERRY,PARMEZAN,RUCOLA';
    option5Price.textContent = '9€';
    option5.classList.add('menuItem');
    textContainer5.appendChild(option5Title);
    textContainer5.appendChild(option5Description);
    textContainer5.appendChild(option5Price);
    option5.appendChild(image5);
    option5.appendChild(textContainer5);

    const option6 = document.createElement('div');
    const image6 = document.createElement('img');
    image6.src = pizzaQuatroStagioni;
    const textContainer6 = document.createElement('div');
    textContainer6.classList.add('textContainer');
    const option6Title = document.createElement('h3');
    const option6Description = document.createElement('p');
    const option6Price = document.createElement('h4');
    option6Title.textContent = 'PIZZA QUATRO STAGIONI';
    option6Description.textContent = 'SPECIAL DOUGH, TOMATO SAUCE, MOZZARELLA, HAM, MUSHROOMS, OLIVES, SALAM';
    option6Price.textContent = '18€';
    option6.classList.add('menuItem');
    textContainer6.appendChild(option6Title);
    textContainer6.appendChild(option6Description);
    textContainer6.appendChild(option6Price);
    option6.appendChild(image6);
    option6.appendChild(textContainer6);

    menuGrid.appendChild(option1);
    menuGrid.appendChild(option2);
    menuGrid.appendChild(option3);
    menuGrid.appendChild(option4);
    menuGrid.appendChild(option5);
    menuGrid.appendChild(option6);

    menuContainer.appendChild(menuGrid);

    return menuContainer;
}