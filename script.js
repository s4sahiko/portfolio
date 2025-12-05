document.addEventListener('DOMContentLoaded', () => {
    // Data and Generation
    const skillsData = [
        "Python", "SQL", "HTML/CSS", "C/C++", "Bash",
        "Linux", "Nmap", "Burp Suite", "GitHub",
        "Windows", "Wireshark", "Metasploit","VS Code",
        "Vulnerability analysis", "Network security", 
        "Basic pentesting","Ethical hacking", "TryHackMe"
    ];
    const skillBubblesContainer = document.querySelector('.skill-bubbles');

    skillsData.forEach((skill, index) => {
        const bubble = document.createElement('div');
        bubble.className = 'skill-bubble';
        bubble.textContent = skill;
        bubble.style.transitionDelay = `${index * 0.05}s`; // Staggered entry animation
        skillBubblesContainer.appendChild(bubble);

        // Simple interactive hover effect

        bubble.addEventListener('mouseenter', () => {
            bubble.style.backgroundColor = 'var(--primary-color)';
            bubble.style.color = 'var(--text-dark)';
        });
        bubble.addEventListener('mouseleave', () => {
            bubble.style.backgroundColor = 'var(--card-bg)';
            bubble.style.color = 'var(--text-light)';
        });
    });

    // Scroll Animations
    const scrollElements = document.querySelectorAll('[data-scroll-animate]');
    const fadeInElement = document.querySelector('[data-scroll-fade]');

    const elementInView = (el, offset = 0) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <= (window.innerHeight - offset)
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };

    const handleScrollAnimation = () => {

        // Simple Fade-in for Hero Text

        if (elementInView(fadeInElement, 150)) {
            displayScrollElement(fadeInElement);
        }

        // Animated elements (Timeline, Cards, Achievements)
        scrollElements.forEach((el) => {
            if (elementInView(el, 100)) {
                displayScrollElement(el);
            }
        });

        // Skill Bubble Pop-in Animation
        const skillBubbles = document.querySelectorAll('.skill-bubble');
        skillBubbles.forEach((bubble) => {
            if (elementInView(skillBubblesContainer, 100)) {
                bubble.style.opacity = '1';
                bubble.style.transform = 'scale(1)';
            }
        });
    };

    window.addEventListener('scroll', () => {
        handleScrollAnimation();
        handleParallax();
    });

    // Run once on load to catch elements already in view

    handleScrollAnimation();


    //Parallax Scrolling Effect

    const parallaxElement = document.querySelector('[data-scroll-parallax]');
    const handleParallax = () => {
        if (!parallaxElement) return;

        // Calculate scroll position relative to the element's position on the screen
        const scrollPosition = window.pageYOffset;
        const speed = 0.2; // Adjust for stronger/weaker effect

        // Move the element slightly up/down based on scroll
        parallaxElement.style.transform = `translateY(${scrollPosition * speed}px)`;
    };

    // Initial call for immediate effect
    handleParallax();
});

// Smooth Scroll for Contact Button

document.getElementById("contactBtn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});
