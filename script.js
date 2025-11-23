// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Class Schedule Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const scheduleRows = document.querySelectorAll('.schedule-row[data-day]');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const selectedDay = button.getAttribute('data-day');
        
        scheduleRows.forEach(row => {
            if (selectedDay === 'all' || row.getAttribute('data-day') === selectedDay) {
                row.style.display = 'grid';
            } else {
                row.style.display = 'none';
            }
        });
    });
});

// Booking Form Submission
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(bookingForm);
        const bookingType = bookingForm.querySelector('select').value;
        const name = bookingForm.querySelector('input[type="text"]').value;
        const email = bookingForm.querySelector('input[type="email"]').value;
        
        // Simulate booking process
        alert(`Thank you ${name}! Your booking request has been received. You will receive a confirmation email at ${email} shortly.`);
        
        // Reset form
        bookingForm.reset();
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = contactForm.querySelector('input[type="text"]').value;
        alert(`Thank you ${name}! Your message has been sent. We'll get back to you soon.`);
        
        contactForm.reset();
    });
}

// Chatbot Toggle
const chatbotButton = document.getElementById('chatbotButton');
const chatbotWidget = document.getElementById('chatbotWidget');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotToggle = document.getElementById('chatbotToggle');

if (chatbotButton) {
    chatbotButton.addEventListener('click', () => {
        chatbotWidget.classList.toggle('active');
    });
}

if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        chatbotWidget.classList.remove('active');
    });
}

if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        chatbotWidget.classList.toggle('active');
    });
}

// Chatbot Functionality
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

const chatbotResponses = {
    'price': 'We have three membership tiers:\n• Basic: £29/month\n• Premium: £39/month (Most Popular)\n• Elite: £59/month\n\nAll include 24/7 access, unlimited sauna, classes & members app!',
    'membership': 'Our memberships include:\n• 24/7 gym access\n• Unlimited sauna access\n• Group classes\n• Bespoke members app\n\nWould you like to see our membership plans?',
    'hours': 'We\'re open 24/7! Members have round-the-clock access to the gym facilities. Our reception is staffed during peak hours, but you can access the gym anytime.',
    'class': 'We offer a variety of classes including:\n• HIIT\n• Yoga\n• Spin\n• Pilates\n• Bootcamp\n• Zumba\n• Stretch & Recovery\n\nCheck our class schedule to see times and availability!',
    'book': 'You can book classes, personal training sessions, or gym inductions directly through our website. Just scroll to the "Book Now" section or click the booking form!',
    'location': 'We\'re located in Tavistock, UK. For specific address details, please contact us at +44 1822 366335 or hello@vitalityfitnesstaistock.com',
    'contact': 'You can reach us at:\n📞 Phone: +44 1822 366335\n📧 Email: hello@vitalityfitnesstaistock.com\n📍 Location: Tavistock, UK\n📱 Instagram: @vft.tavistock',
    'sauna': 'Yes! All our memberships include unlimited sauna access. You can use the sauna facilities anytime the gym is open (24/7).',
    'app': 'Our bespoke members app allows you to:\n• Book classes\n• Track your workouts\n• Manage your membership\n• View class schedules\n• Get notifications\n\nIt\'s included with all memberships!',
    'default': 'I can help you with:\n• Membership prices and plans\n• Class schedules\n• Booking information\n• Gym hours\n• Contact details\n• Facilities and amenities\n\nWhat would you like to know?'
};

function getChatbotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('fee')) {
        return chatbotResponses['price'];
    } else if (lowerMessage.includes('membership') || lowerMessage.includes('plan')) {
        return chatbotResponses['membership'];
    } else if (lowerMessage.includes('hour') || lowerMessage.includes('open') || lowerMessage.includes('time')) {
        return chatbotResponses['hours'];
    } else if (lowerMessage.includes('class') || lowerMessage.includes('schedule')) {
        return chatbotResponses['class'];
    } else if (lowerMessage.includes('book') || lowerMessage.includes('reserve')) {
        return chatbotResponses['book'];
    } else if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
        return chatbotResponses['location'];
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
        return chatbotResponses['contact'];
    } else if (lowerMessage.includes('sauna')) {
        return chatbotResponses['sauna'];
    } else if (lowerMessage.includes('app') || lowerMessage.includes('application')) {
        return chatbotResponses['app'];
    } else {
        return chatbotResponses['default'];
    }
}

function addChatbotMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${isUser ? 'user' : 'bot'}`;
    
    const messageP = document.createElement('p');
    messageP.textContent = message;
    messageDiv.appendChild(messageP);
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function sendChatbotMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    // Add user message
    addChatbotMessage(message, true);
    chatbotInput.value = '';
    
    // Simulate typing delay
    setTimeout(() => {
        const response = getChatbotResponse(message);
        addChatbotMessage(response, false);
    }, 1000);
}

if (chatbotSend) {
    chatbotSend.addEventListener('click', sendChatbotMessage);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChatbotMessage();
        }
    });
}

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    }
    
    lastScroll = currentScroll;
});

// Animate on scroll (simple version)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.expect-card, .membership-card, .review-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(el);
});

// Set minimum date for booking form to today
const dateInput = document.querySelector('input[type="date"]');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

