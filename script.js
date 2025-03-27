
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const form = e.target;
    const formMessage = document.getElementById('formMessage');
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
        formMessage.innerText = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.innerText = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }


    formMessage.innerHTML = `
        <strong>Message Sent! We'll get back to you soon.</strong><br>
        You can also reach us through the following channels:<br>
        <strong>TikTok:</strong> <a href="https://www.tiktok.com/@yourusername" target="_blank">yourusername</a><br>
        <strong>Telegram:</strong> <a href="https://t.me/yourusername" target="_blank">yourusername</a><br>
        <strong>Instagram:</strong> <a href="https://www.instagram.com/yourusername" target="_blank">yourusername</a><br>
        <strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>
    `;
    formMessage.style.color = "green";


    form.reset();
});

document.querySelectorAll('.hotel').forEach((hotel, index) => {
    hotel.addEventListener('click', function() {
        const socialLinks = [
            'https://www.tiktok.com/@yourusername', 
            'https://t.me/yourusername', 
            'https://www.instagram.com/yourusername', 
        ];
        if (socialLinks[index]) {
            window.open(socialLinks[index], '_blank');
        }
    });
});
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert("Please fill in all fields");
        return;
    }

  
    alert(`Attempting to log in with username: ${username}`);

    
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    if (!newUsername || !newPassword) {
        alert("Please fill in all fields");
        return;
    }

    alert(`Attempting to register with username: ${newUsername}`);

 
});