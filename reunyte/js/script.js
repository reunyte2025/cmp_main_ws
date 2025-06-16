// Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById("mobileMenuBtn");
        const navLinks = document.getElementById("navLinks");

        mobileMenuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Sticky Header
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
        
        // Tab Functionality for Courses
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                tabBtns.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                // Show corresponding content
                const tabId = btn.getAttribute('data-tab') + '-tab';
                document.getElementById(tabId).classList.add('active');
            });
        });
        
        // Form Submission
        // const contactForm = document.getElementById('contactForm');
        
        // contactForm.addEventListener('submit', (e) => {
        //     e.preventDefault();
            
        //     // Get form values
        //     const name = document.getElementById('name').value;
        //     const email = document.getElementById('email').value;
        //     const subject = document.getElementById('subject').value;
        //     const message = document.getElementById('message').value;
            
        //     // Here you would typically send this data to a server
        //     console.log({ name, email, subject, message });
            
        //     // Show success message
        //     alert('Thank you for your message! We will get back to you soon.');
            
        //     // Reset form
        //     contactForm.reset();
        // });
        
        // Smooth Scrolling for Anchor Links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });


// Adding a smooth page transition effect
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });

            setTimeout(() => {
                window.location.hash = this.getAttribute('href');
            }, 800);
        }
    });
});
window.addEventListener('DOMContentLoaded', () => {
    fetch('./footer.html')  // adjust path if footer.html is in a subfolder
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading footer:', error);
        });
});



