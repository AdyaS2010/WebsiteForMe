// Smooth Scrolling Features
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Project Section. Oh Yeah! 
const projects = [
    {
        title: "Volunteering App",
        description: "An app to connect high school students with volunteering opportunities."
    },
    {
        title: "Interactive Website",
        description: "A personal website with interactive features."
    },
    // Will add more projects here later on ... 
];

const projectSection = document.getElementById('projects');
const projectList = document.createElement('ul');

projects.forEach(project => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
    projectList.appendChild(listItem);
});

projectSection.appendChild(projectList);

// Contact Form Validation
const contactForm = document.createElement('form');
contactForm.innerHTML = `
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
    <label for="message">Message:</label>
    <textarea id="message" name="message" required></textarea>
    <button type="submit">Send</button>
`;

document.getElementById('contact').appendChild(contactForm);

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message!');
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
