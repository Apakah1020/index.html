
    // Set current year in copyright
            document.getElementById('currentYear').textContent = new Date().getFullYear();
            
            // Smooth scroll behavior
            let currentSection = 0;
            const sections = document.querySelectorAll('.section');
            const scrollDots = document.querySelectorAll('.scroll-dot');
            const navLinks = document.querySelectorAll('.nav-links a');

            // Initialize
            window.addEventListener('load', () => {
                updateActiveSection(0);
            });

            // Scroll event listener
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    const scrollTop = window.pageYOffset;
                    const windowHeight = window.innerHeight;
                    
                    sections.forEach((section, index) => {
                        const sectionTop = section.offsetTop;
                        const sectionHeight = section.offsetHeight;
                        
                        if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionTop + sectionHeight - windowHeight / 2) {
                            updateActiveSection(index);
                        }
                    });
                }, 10);
            });

            // Update active section
            function updateActiveSection(index) {
                currentSection = index;
                
                // Update sections
                sections.forEach((section, i) => {
                    section.classList.toggle('active', i <= index);
                });
                
                // Update scroll dots
                scrollDots.forEach((dot, i) => {
                    dot.classList.toggle('active', i === index);
                });
            }

            // Scroll dot click handlers
            scrollDots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    sections[index].scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Navigation link click handlers
            navLinks.forEach((link) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                });
            });

            // Open contact links
            function openLink(url) {
                window.open(url, '_blank');
            }
            
            function showInfo() {
                const emoji = document.querySelector('.hero-emoji');
                const heroContent = document.querySelector('.hero-content');
                
                // Create info popup effect
                emoji.style.transform = 'translate(-50%, -50%) scale(1.5)';
                emoji.style.zIndex = '10';
                
                setTimeout(() => {
                    emoji.style.transform = 'translate(-50%, -50%) scale(1)';
                    emoji.style.zIndex = '1';
                    
                    // Add sparkle effect
                    createSparkles();
                }, 300);
            }

            // Create sparkle animation
            function createSparkles() {
                const hero = document.querySelector('.hero');
                const sparkleCount = 20;
                
                for (let i = 0; i < sparkleCount; i++) {
                    setTimeout(() => {
                        const sparkle = document.createElement('div');
                        sparkle.innerHTML = '✨';
                        sparkle.style.position = 'absolute';
                        sparkle.style.left = Math.random() * 100 + '%';
                        sparkle.style.top = Math.random() * 100 + '%';
                        sparkle.style.fontSize = '1.5rem';
                        sparkle.style.pointerEvents = 'none';
                        sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
                        
                        hero.appendChild(sparkle);
                        
                        setTimeout(() => {
                            sparkle.remove();
                        }, 2000);
                    }, i * 100);
                }
            }

            // Add sparkle animation keyframes
            const sparkleStyle = document.createElement('style');
            sparkleStyle.textContent = `
                @keyframes sparkleFloat {
                    0% {
                        opacity: 0;
                        transform: translateY(0) scale(0);
                    }
                    50% {
                        opacity: 1;
                        transform: translateY(-50px) scale(1);
                    }
                    100% {
                        opacity: 0;
                        transform: translateY(-100px) scale(0);
                    }
                }
            `;
            document.head.appendChild(sparkleStyle);

            // Parallax effect for floating elements
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.floating-element');
                
                parallaxElements.forEach((element, index) => {
                    const speed = 0.5 + (index * 0.1);
                    element.style.transform = `translateY(${scrolled * speed}px)`;
                });
            });

            // Skill card hover effect
            const skillCards = document.querySelectorAll('.skill-card');
            skillCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.background = 'rgba(139, 92, 246, 0.1)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.background = 'rgba(15, 15, 30, 0.5)';
                });
            });

            

            // Project card hover effect
            const projectCards = document.querySelectorAll('.project-card');
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                    card.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.3)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0)';
                    card.style.boxShadow = 'none';
                });
            });

            // Project button hover effects
            const projectButtons = document.querySelectorAll('.project-button');
            projectButtons.forEach(button => {
                button.addEventListener('mouseenter', () => {
                    button.style.transform = 'translateY(-3px)';
                });
                
                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translateY(0)';
                });
            });

            // Contact card click effects
            const socialIcons = document.querySelectorAll('.social-icon');
            socialIcons.forEach(icon => {
                icon.addEventListener('mouseenter', () => {
                    icon.style.transform = 'translateY(-5px) scale(1.1)';
                });
                
                icon.addEventListener('mouseleave', () => {
                    icon.style.transform = 'translateY(0) scale(1)';
                });
                
                icon.addEventListener('click', function() {
                    // Add click ripple effect
                    const ripple = document.createElement('div');
                    ripple.style.position = 'absolute';
                    ripple.style.borderRadius = '50%';
                    ripple.style.background = 'rgba(139, 92, 246, 0.5)';
                    ripple.style.transform = 'scale(0)';
                    ripple.style.animation = 'ripple 0.6s linear';
                    ripple.style.left = '50%';
                    ripple.style.top = '50%';
                    ripple.style.width = '20px';
                    ripple.style.height = '20px';
                    ripple.style.marginLeft = '-10px';
                    ripple.style.marginTop = '-10px';
                    
                    this.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });

            // Skill modal functionality
            const modal = document.getElementById('skillModal');
            const modalIcon = document.getElementById('modalIcon');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const closeBtn = document.querySelector('.close');

            function showSkillModal(title, iconUrl, description) {
                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modalIcon.innerHTML = `<img src="${iconUrl}" alt="${title}">`;
                modal.style.display = 'block';
            }

            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });

            // Add typing effect to hero text and hide emoji after delay
            window.addEventListener('load', () => {
                const heroTitle = document.querySelector('.hero h1');
                const heroEmoji = document.querySelector('.hero-emoji');
                const originalText = heroTitle.textContent;
                heroTitle.textContent = '';
                
                let i = 0;
                const typeWriter = () => {
                    if (i < originalText.length) {
                        heroTitle.textContent += originalText.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    }
                };
                
                setTimeout(typeWriter, 500);
                
                // Hide emoji after 2 seconds with fade animation
                setTimeout(() => {
                    heroEmoji.style.transition = 'all 0.5s ease';
                    heroEmoji.style.opacity = '0';
                    heroEmoji.style.transform = 'translate(-50%, -50%) scale(0)';
                    
                    setTimeout(() => {
                        heroEmoji.style.display = 'none';
                    }, 500);
                }, 2000);
            });

            // Tambahkan ini di bagian script yang sudah ada

            

    // Theme Toggle Functionality
    function setTheme(theme) {
        const body = document.body;
        const themeButtons = document.querySelectorAll('.theme-btn');
        
        // Remove all theme classes
        body.classList.remove('dark-theme', 'gray-theme');
        
        // Remove active class from all buttons
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Apply selected theme
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            document.querySelector('.theme-btn.dark').classList.add('active');
        } else if (theme === 'gray') {
            body.classList.add('gray-theme');
            document.querySelector('.theme-btn.gray').classList.add('active');
        } else {
            // Default theme
            document.querySelector('.theme-btn.default').classList.add('active');
        }
        
        // Save theme preference to localStorage
        localStorage.setItem('portfolio-theme', theme);
    }

    // Check for saved theme preference or default to 'default'
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
        setTheme(savedTheme);

        document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.querySelector('.skills-carousel');
            const prevBtn = document.querySelector('.carousel-arrow.prev');
            const nextBtn = document.querySelector('.carousel-arrow.next');
            const cardWidth = 310; // Card width + gap
            
            // Previous slide
            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: -cardWidth,
                    behavior: 'smooth'
                });
            });
            
            // Next slide
            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth'
                });
            });
            
            // Optional: Auto-scroll
            let scrollInterval = setInterval(() => {
                carousel.scrollBy({
                    left: cardWidth,
                    behavior: 'smooth'
                });
            }, 5000);
            
            // Pause auto-scroll on hover
            carousel.addEventListener('mouseenter', () => {
                clearInterval(scrollInterval);
            });
            
            // Resume auto-scroll on mouse leave
            carousel.addEventListener('mouseleave', () => {
                scrollInterval = setInterval(() => {
                    carousel.scrollBy({
                        left: cardWidth,
                        behavior: 'smooth'
                    });
                }, 5000);
            });
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
            const carousel = document.querySelector('.skills-carousel');
            const prevBtn = document.querySelector('.carousel-arrow.prev');
            const nextBtn = document.querySelector('.carousel-arrow.next');
            
            // Calculate card width and gap
            const cards = carousel.querySelectorAll('.skill-card');
            const cardWidth = cards[0].offsetWidth;
            const gap = 30; // This should match the CSS gap
            const cardTotalWidth = cardWidth + gap;
            
            // Previous slide with GSAP
            prevBtn.addEventListener('click', () => {
                const currentScroll = carousel.scrollLeft;
                const targetScroll = Math.max(0, currentScroll - cardTotalWidth);
                
                gsap.to(carousel, {
                    scrollLeft: targetScroll,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
            
            // Next slide with GSAP
            nextBtn.addEventListener('click', () => {
                const currentScroll = carousel.scrollLeft;
                const maxScroll = carousel.scrollWidth - carousel.clientWidth;
                const targetScroll = Math.min(maxScroll, currentScroll + cardTotalWidth);
                
                gsap.to(carousel, {
                    scrollLeft: targetScroll,
                    duration: 0.5,
                    ease: "power2.out"
                });
            });
            
            // Optional: Auto-scroll with GSAP
            let autoScrollTimer;
            
            function startAutoScroll() {
                autoScrollTimer = setInterval(() => {
                    const currentScroll = carousel.scrollLeft;
                    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
                    
                    if (currentScroll >= maxScroll) {
                        // If we've reached the end, scroll back to start
                        gsap.to(carousel, {
                            scrollLeft: 0,
                            duration: 0.8,
                            ease: "power2.inOut"
                        });
                    } else {
                        // Otherwise, scroll to next card
                        const targetScroll = Math.min(maxScroll, currentScroll + cardTotalWidth);
                        gsap.to(carousel, {
                            scrollLeft: targetScroll,
                            duration: 0.5,
                            ease: "power2.out"
                        });
                    }
                }, 3000);
            }
            
            function stopAutoScroll() {
                clearInterval(autoScrollTimer);
            }
            
            // Start auto-scroll
            startAutoScroll();
            
            // Pause auto-scroll on hover
            carousel.addEventListener('mouseenter', stopAutoScroll);
            carousel.addEventListener('mouseleave', startAutoScroll);
            
            // Touch/swipe support
            let isDown = false;
            let startX;
            let scrollLeft;
            
            carousel.addEventListener('mousedown', (e) => {
                isDown = true;
                carousel.classList.add('dragging');
                startX = e.pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
                stopAutoScroll();
            });
            
            carousel.addEventListener('mouseleave', () => {
                isDown = false;
                carousel.classList.remove('dragging');
            });
            
            carousel.addEventListener('mouseup', () => {
                isDown = false;
                carousel.classList.remove('dragging');
                startAutoScroll();
            });
            
            carousel.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 2; // Scroll speed
                carousel.scrollLeft = scrollLeft - walk;
            });
            
            // Touch events for mobile
            carousel.addEventListener('touchstart', (e) => {
                isDown = true;
                startX = e.touches[0].pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
                stopAutoScroll();
            });
            
            carousel.addEventListener('touchend', () => {
                isDown = false;
                startAutoScroll();
            });
            
            carousel.addEventListener('touchmove', (e) => {
                if (!isDown) return;
                const x = e.touches[0].pageX - carousel.offsetLeft;
                const walk = (x - startX) * 2;
                carousel.scrollLeft = scrollLeft - walk;

            });
        });
// Background Bintang
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Create stars
    const stars = [];
    const starCount = 200;
    
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5,
            vx: Math.random() * 0.2 - 0.1,
            vy: Math.random() * 0.2 - 0.1,
            alpha: Math.random()
        });
    }
    
    // Draw stars
    function drawStars() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        stars.forEach(star => {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
            ctx.fill();
            
            // Update position
            star.x += star.vx;
            star.y += star.vy;
            
            // Reset if out of bounds
            if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
                star.x = Math.random() * canvas.width;
                star.y = Math.random() * canvas.height;
            }
            
            // Twinkle effect
            star.alpha += Math.random() * 0.1 - 0.05;
            if (star.alpha < 0.1) star.alpha = 0.1;
            if (star.alpha > 1) star.alpha = 1;
        });
        
        requestAnimationFrame(drawStars);
    }
    
    drawStars();
    
    // Kode JavaScript yang sudah ada tetap di sini
    // Set current year in copyright
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Smooth scroll behavior
    let currentSection = 0;
    const sections = document.querySelectorAll('.section');
    const scrollDots = document.querySelectorAll('.scroll-dot');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Initialize
    window.addEventListener('load', () => {
        updateActiveSection(0);
    });

    // Scroll event listener
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const scrollTop = window.pageYOffset;
            const windowHeight = window.innerHeight;
            
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollTop >= sectionTop - windowHeight / 2 && scrollTop < sectionTop + sectionHeight - windowHeight / 2) {
                    updateActiveSection(index);
                }
            });
        }, 10);
    });

    // Update active section
    function updateActiveSection(index) {
        currentSection = index;
        
        // Update sections
        sections.forEach((section, i) => {
            section.classList.toggle('active', i <= index);
        });
        
        // Update scroll dots
        scrollDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    // Scroll dot click handlers
    scrollDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Navigation link click handlers
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Open contact links
    function openLink(url) {
        window.open(url, '_blank');
    }
    
    function showInfo() {
        const emoji = document.querySelector('.hero-emoji');
        const heroContent = document.querySelector('.hero-content');
        
        // Create info popup effect
        emoji.style.transform = 'translate(-50%, -50%) scale(1.5)';
        emoji.style.zIndex = '10';
        
        setTimeout(() => {
            emoji.style.transform = 'translate(-50%, -50%) scale(1)';
            emoji.style.zIndex = '1';
            
            // Add sparkle effect
            createSparkles();
        }, 300);
    }

    // Create sparkle animation
    function createSparkles() {
        const hero = document.querySelector('.hero');
        const sparkleCount = 20;
        
        for (let i = 0; i < sparkleCount; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.innerHTML = '✨';
                sparkle.style.position = 'absolute';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                sparkle.style.fontSize = '1.5rem';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.animation = 'sparkleFloat 2s ease-out forwards';
                
                hero.appendChild(sparkle);
                
                setTimeout(() => {
                    sparkle.remove();
                }, 2000);
            }, i * 100);
        }
    }

    // Add sparkle animation keyframes
    const sparkleStyle = document.createElement('style');
    sparkleStyle.textContent = `
        @keyframes sparkleFloat {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0);
            }
            50% {
                opacity: 1;
                transform: translateY(-50px) scale(1);
            }
            100% {
                opacity: 0;
                transform: translateY(-100px) scale(0);
            }
        }
    `;
    document.head.appendChild(sparkleStyle);

    // Parallax effect for floating elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-element');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Skill card hover effect
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.background = 'rgba(139, 92, 246, 0.1)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.background = 'rgba(15, 15, 30, 0.5)';
        });
    });

    // Project card hover effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });

    // Project button hover effects
    const projectButtons = document.querySelectorAll('.project-button');
    projectButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });

    // Contact card click effects
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1)';
        });
        
        icon.addEventListener('click', function() {
            // Add click ripple effect
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(139, 92, 246, 0.5)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.left = '50%';
            ripple.style.top = '50%';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.marginLeft = '-10px';
            ripple.style.marginTop = '-10px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Skill modal functionality
    const modal = document.getElementById('skillModal');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const closeBtn = document.querySelector('.close');

    function showSkillModal(title, iconUrl, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalIcon.innerHTML = `<img src="${iconUrl}" alt="${title}">`;
        modal.style.display = 'block';
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Add typing effect to hero text and hide emoji after delay
    window.addEventListener('load', () => {
        const heroTitle = document.querySelector('.hero h1');
        const heroEmoji = document.querySelector('.hero-emoji');
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
        
        // Hide emoji after 2 seconds with fade animation
        setTimeout(() => {
            heroEmoji.style.transition = 'all 0.5s ease';
            heroEmoji.style.opacity = '0';
            heroEmoji.style.transform = 'translate(-50%, -50%) scale(0)';
            
            setTimeout(() => {
                heroEmoji.style.display = 'none';
            }, 500);
        }, 2000);
    });

    // Theme Toggle Functionality
    function setTheme(theme) {
        const body = document.body;
        const themeButtons = document.querySelectorAll('.theme-btn');
        
        // Remove all theme classes
        body.classList.remove('dark-theme', 'gray-theme');
        
        // Remove active class from all buttons
        themeButtons.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Apply selected theme
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            document.querySelector('.theme-btn.dark').classList.add('active');
        } else if (theme === 'gray') {
            body.classList.add('gray-theme');
            document.querySelector('.theme-btn.gray').classList.add('active');
        } else {
            // Default theme
            document.querySelector('.theme-btn.default').classList.add('active');
        }
        
        // Save theme preference to localStorage
        localStorage.setItem('portfolio-theme', theme);
    }

    // Check for saved theme preference or default to 'default'
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    setTheme(savedTheme);

    // Skills Carousel
    const carousel = document.querySelector('.skills-carousel');
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    
    if (carousel && prevBtn && nextBtn) {
        // Calculate card width and gap
        const cards = carousel.querySelectorAll('.skill-card');
        if (cards.length > 0) {
            const cardWidth = cards[0].offsetWidth;
            const gap = 30; // This should match the CSS gap
            const cardTotalWidth = cardWidth + gap;
            
            // Previous slide
            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: -cardTotalWidth,
                    behavior: 'smooth'
                });
            });
            
            // Next slide
            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({
                    left: cardTotalWidth,
                    behavior: 'smooth'
                });
            });
            
            // Optional: Auto-scroll
            let scrollInterval = setInterval(() => {
                carousel.scrollBy({
                    left: cardTotalWidth,
                    behavior: 'smooth'
                });
            }, 5000);
            
            // Pause auto-scroll on hover
            carousel.addEventListener('mouseenter', () => {
                clearInterval(scrollInterval);
            });
            
            // Resume auto-scroll on mouse leave
            carousel.addEventListener('mouseleave', () => {
                scrollInterval = setInterval(() => {
                    carousel.scrollBy({
                        left: cardTotalWidth,
                        behavior: 'smooth'
                    });
                }, 5000);
            });
        }
    }

    // Firebase Configuration - GANTI DENGAN KONFIGURASI FIREBASE ANDA
    const firebaseConfig = {
        apiKey: "YOUR_API_KEY",
        authDomain: "YOUR_AUTH_DOMAIN",
        databaseURL: "YOUR_DATABASE_URL",
        projectId: "YOUR_PROJECT_ID",
        storageBucket: "YOUR_STORAGE_BUCKET",
        messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
        appId: "YOUR_APP_ID"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    // Buku Tamu Functionality
    const guestbookForm = document.getElementById('submitGuestbook');
    const guestbookEntries = document.getElementById('guestbookEntries');
    
    if (guestbookForm) {
        guestbookForm.addEventListener('click', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('guestName').value;
            const message = document.getElementById('guestMessage').value;
            
            if (name && message) {
                // Save to Firebase
                const newGuestbookEntry = {
                    name: name,
                    message: message,
                    timestamp: Date.now()
                };
                
                database.ref('guestbook').push(newGuestbookEntry)
                    .then(() => {
                        // Reset form
                        document.getElementById('guestName').value = '';
                        document.getElementById('guestMessage').value = '';
                        
                        // Show success message
                        showNotification('Terima kasih! Pesan Anda telah ditambahkan ke buku tamu.');
                    })
                    .catch(error => {
                        console.error('Error saving guestbook entry:', error);
                        showNotification('Maaf, terjadi kesalahan. Silakan coba lagi.');
                    });
            } else {
                showNotification('Silakan isi semua field.');
            }
        });
    }
    
    // Fetch guestbook entries from Firebase
    if (guestbookEntries) {
        database.ref('guestbook').orderByChild('timestamp').limitToLast(10).on('value', function(snapshot) {
            guestbookEntries.innerHTML = '';
            
            snapshot.forEach(function(childSnapshot) {
                const entry = childSnapshot.val();
                const entryElement = document.createElement('div');
                entryElement.className = 'guestbook-entry';
                
                const date = new Date(entry.timestamp);
                const formattedDate = date.toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                
                entryElement.innerHTML = `
                    <h4>${entry.name}</h4>
                    <p>${entry.message}</p>
                    <div class="review-date">${formattedDate}</div>
                `;
                
                guestbookEntries.appendChild(entryElement);
            });
        });
    }
    
    // Ulasan Functionality
    const reviewForm = document.getElementById('submitReview');
    const reviewsList = document.getElementById('reviewsList');
    
    if (reviewForm) {
        reviewForm.addEventListener('click', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('reviewerName').value;
            const rating = document.getElementById('rating').value;
            const reviewText = document.getElementById('reviewText').value;
            
            if (name && rating && reviewText) {
                // Save to Firebase
                const newReview = {
                    name: name,
                    rating: rating,
                    review: reviewText,
                    timestamp: Date.now()
                };
                
                database.ref('reviews').push(newReview)
                    .then(() => {
                        // Reset form
                        document.getElementById('reviewerName').value = '';
                        document.getElementById('rating').value = '5';
                        document.getElementById('reviewText').value = '';
                        
                        // Show success message
                        showNotification('Terima kasih! Ulasan Anda telah ditambahkan.');
                    })
                    .catch(error => {
                        console.error('Error saving review:', error);
                        showNotification('Maaf, terjadi kesalahan. Silakan coba lagi.');
                    });
            } else {
                showNotification('Silakan isi semua field.');
            }
        });
    }
    
    // Fetch reviews from Firebase
    if (reviewsList) {
        database.ref('reviews').orderByChild('timestamp').limitToLast(10).on('value', function(snapshot) {
            reviewsList.innerHTML = '';
            
            snapshot.forEach(function(childSnapshot) {
                const review = childSnapshot.val();
                const reviewElement = document.createElement('div');
                reviewElement.className = 'review-item';
                
                const date = new Date(review.timestamp);
                const formattedDate = date.toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                
                // Generate star rating
                let stars = '';
                for (let i = 1; i <= 5; i++) {
                    if (i <= review.rating) {
                        stars += '<span class="star">★</span>';
                    } else {
                        stars += '<span class="star empty">☆</span>';
                    }
                }
                
                reviewElement.innerHTML = `
                    <h4>${review.name}</h4>
                    <div class="review-rating">${stars}</div>
                    <p>${review.review}</p>
                    <div class="review-date">${formattedDate}</div>
                `;
                
                reviewsList.appendChild(reviewElement);
            });
        });
    }
    
    // Notification function
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Hide notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            
            // Remove from DOM after transition
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
    
    // Add notification styles
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        .notification {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #8b5cf6, #7209b7);
            color: white;
            padding: 15px 25px;
            border-radius: 10px;
            box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
            z-index: 2000;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
        }
        
        .notification.show {
            transform: translateY(0);
            opacity: 1;
        }
    `;
    document.head.appendChild(notificationStyle);
});

// Firebase Configuration - GANTI DENGAN KONFIGURASI FIREBASE ANDA
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah pengguna sudah mengisi buku tamu
    const hasVisited = localStorage.getItem('hasVisited');
    const guestbookSection = document.getElementById('guestbook');
    
    if (hasVisited) {
        // Jika sudah pernah mengisi, sembunyikan buku tamu
        guestbookSection.style.display = 'none';
    } else {
        // Jika belum, tampilkan buku tamu dan disable scroll
        document.body.style.overflow = 'hidden';
        
        // Tangani tombol Confirm
        document.getElementById('submitGuestbook').addEventListener('click', function() {
            const name = document.getElementById('guestName').value.trim();
            
            if (name) {
                // Simpan nama ke localStorage
                localStorage.setItem('visitorName', name);
                localStorage.setItem('hasVisited', 'true');
                
                // Sembunyikan buku tamu dengan animasi
                guestbookSection.style.opacity = '0';
                guestbookSection.style.transition = 'opacity 0.5s ease';
                
                setTimeout(() => {
                    guestbookSection.style.display = 'none';
                    document.body.style.overflow = 'auto';
                    
                    // Tampilkan notifikasi selamat datang
                    showNotification(`Selamat datang, ${name}!`);
                }, 500);
            } else {
                showNotification('Silakan masukkan nama Anda');
            }
        });
        
        // Tangani tombol Skip
        document.getElementById('skipGuestbook').addEventListener('click', function() {
            localStorage.setItem('hasVisited', 'true');
            
            // Sembunyikan buku tamu dengan animasi
            guestbookSection.style.opacity = '0';
            guestbookSection.style.transition = 'opacity 0.5s ease';
            
            setTimeout(() => {
                guestbookSection.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 500);
        });
    }
    
    // Fungsi untuk menampilkan notifikasi
    function showNotification(message) {
        // Cek apakah notifikasi sudah ada
        let notification = document.querySelector('.notification');
        
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'notification';
            document.body.appendChild(notification);
        }
        
        notification.textContent = message;
        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }
    
    // Tambahkan CSS untuk notifikasi jika belum ada
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: linear-gradient(135deg, #8b5cf6, #7209b7);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
                z-index: 10000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .notification.show {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
});
