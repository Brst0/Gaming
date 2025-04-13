// Example JavaScript to handle contact form submission
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Your message has been sent!');
    } else {
        alert('Please fill in all fields.');
    }
});
