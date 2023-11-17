// Get the form element from the HTML page everything is in div with id="response"
const form = document.getElementById('response');
const button = document.getElementById('submit');


// Add an event listener to the form for when it is submitted
button.addEventListener('click', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression to check if email is valid
    const message = document.getElementById('message').value;

    // Check if email is valid
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Alert the user with the information
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
}); 
