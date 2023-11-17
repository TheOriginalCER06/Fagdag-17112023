// Get the form element from the HTML page everything is in div with id="response"
const form = document.getElementById('response');

// Add an event listener to the form for when it is submitted
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the values from the form inputs
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const message = form.elements.message.value;

    // Alert the user with the information
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
