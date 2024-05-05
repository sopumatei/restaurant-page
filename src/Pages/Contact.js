import '../css/contact.css'

export const loadContact = () => {
    // Creating the main container
    const contactContainer = document.createElement('div');
    contactContainer.id = 'contact-container';

    // Creating the left part
    const leftPart = document.createElement('div');
    leftPart.id = 'left-part';

    // Creating the right part
    const rightPart = document.createElement('div');
    rightPart.id = 'right-part';

    // Crating the address container
    const address = document.createElement('div');
    address.id = 'address';
    const addressTitle = document.createElement('h2');
    addressTitle.textContent = 'Address';
    const addressDesc = document.createElement('p');
    addressDesc.textContent = 'Romania, Vaslui, Street Anton Pann no.28'
    address.appendChild(addressTitle);
    address.appendChild(addressDesc);
    leftPart.appendChild(address);

    // Creating the google maps iframe
    const location = document.createElement('iframe');
    location.id = 'location';
    location.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2739.0357668916763!2d27.735948576680325!3d46.64580845382901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40ca7373e2aea6bf%3A0x9e07a2416577a5e0!2sVecchia%20Roma!5e0!3m2!1sro!2sro!4v1714944645921!5m2!1sro!2sro'
    location.width = '600';
    location.height = '400';
    location.style.border = 'none';
    location.allowFullscreen = '';
    location.loading = 'lazy';
    location.referrerPolicy = 'no-referrer-when-downgrade';
    leftPart.appendChild(location);

    // Creating the hours container
    const hours = document.createElement('div');
    hours.id = 'hours';
    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = 'Hours';
    const hoursDesc = document.createElement('p');
    hoursDesc.textContent = 'Monday - Sunday: 10:00 - 00:00'
    hours.appendChild(hoursTitle);
    hours.appendChild(hoursDesc);
    rightPart.appendChild(hours);

    // Creating the contact container
    const contact = document.createElement('div');
    contact.id = 'contact';
    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';
    const contactNumber = document.createElement('p');
    contactNumber.textContent = 'Phone: 0335417417'
    const contactEmail = document.createElement('p');
    contactEmail.textContent = 'E-mail: vecchiaroma@restaurant.ro'
    contact.appendChild(contactTitle);
    contact.appendChild(contactNumber);
    contact.appendChild(contactEmail);
    rightPart.appendChild(contact);

    contactContainer.appendChild(leftPart);
    contactContainer.appendChild(rightPart);

    return contactContainer;
}