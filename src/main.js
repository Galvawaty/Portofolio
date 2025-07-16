// Portfolio JavaScript

// Project data
const projects = [
    {
        title: "MusicProject Web",
        description: "Aplikasi web untuk melakukan preview tentang wiki dari music artist",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        tags: ["HTML", "CSS", "JS","JAVA"],
        githubLink: "https://github.com/Galvawaty/MUSICPROJECT"
    },
    {
        title: "Mobile ChatApp",
        description: "Aplikasi mobile chat seperti WhattsApp",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
        tags: ["Java", "Firebase"],
        githubLink: "https://github.com/Galvawaty/ChatApp-Mobile"
    },
    {
        title: "CarniforU",
        description: "Website Resep yang di buat untuk seseorang yang ingin mekalukan carnifore diet",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        tags: ["HTML", "CSS", "JS"],
        githubLink: "https://github.com/Galvawaty/CarniforU"
    },
    {
        title: "SPDLN KUI PNJ ",
        description: "hasil dari analisis permintaan client untuk di buatkan web Surat Pengajuan Dinas Luar ege ",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
        tags: ["StarUML", "Architecture Enterprise", "draw.io"],
        GDriveLink: "https://drive.google.com/drive/folders/1X2jSidStAhGlX4BZ9U6OT58Quwkx9P7n?usp=drive_link"
    }
];

// State management
let state = {
    isMenuOpen: false,
    currentSection: 'home',
    isLoading: false
};

// DOM elements
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const projectsContainer = document.getElementById('projects-container');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize all components
function initializeApp() {
    setupMobileMenu();
    renderProjects();
    setupScrollEffects();
    setupNavigation();
}

// Mobile menu functionality
function setupMobileMenu() {
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', toggleMobileMenu);
    }
}

function toggleMobileMenu() {
    state.isMenuOpen = !state.isMenuOpen;
    
    if (state.isMenuOpen) {
        mobileMenu.classList.remove('hidden');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Render projects to the DOM
function renderProjects() {
    if (!projectsContainer) return;
    
    projectsContainer.innerHTML = '';
    
    projects.forEach((project, index) => {
        const projectCard = createProjectCard(project, index);
        projectsContainer.appendChild(projectCard);
    });
}

// Create individual project card
function createProjectCard(project, index) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 project-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 100);
    
    card.innerHTML = `
        <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-600 relative overflow-hidden">
            <img 
                src="${project.image}" 
                alt="${project.title}"
                class="w-full h-full object-cover opacity-90"
                onerror="this.src='https://via.placeholder.com/400x300?text=Project+Image'"
            />
            <div class="project-image-overlay">
                <div class="text-white text-center">
                    <h4 class="text-xl font-bold mb-2">${project.title}</h4>
                    <p class="text-sm opacity-90">Click to view details</p>
                </div>
            </div>
        </div>
        
        <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-3">${project.title}</h3>
            <p class="text-gray-600 mb-4 leading-relaxed">${project.description}</p>
            
            <div class="flex flex-wrap gap-2 mb-4">
                ${project.tags.map(tag => `
                    <span class="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm skill-tag">
                        ${tag}
                    </span>
                `).join('')}
            </div>
            
            <div class="flex gap-3">
                <a href="${project.githubLink}" target="_blank" rel="noopener noreferrer" 
                   class="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors">
                    <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span class="text-sm font-medium">Source Code</span>
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// Smooth scrolling functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.offsetTop;
        const offsetPosition = elementPosition - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (state.isMenuOpen) {
            toggleMobileMenu();
        }
        
        // Update active section
        state.currentSection = sectionId;
        updateActiveNavigation();
    }
}

// Setup scroll effects
function setupScrollEffects() {
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Handle scroll events
function handleScroll() {
    const scrollY = window.scrollY;
    
    // Update active navigation based on scroll position
    const sections = ['home', 'about', 'projects'];
    
    sections.forEach(sectionId => {
        const element = document.getElementById(sectionId);
        if (element) {
            const elementTop = element.offsetTop - 100;
            const elementBottom = elementTop + element.offsetHeight;
            
            if (scrollY >= elementTop && scrollY < elementBottom) {
                if (state.currentSection !== sectionId) {
                    state.currentSection = sectionId;
                    updateActiveNavigation();
                }
            }
        }
    });
}

// Setup navigation
function setupNavigation() {
    // Add global scrollToSection function
    window.scrollToSection = scrollToSection;
    
    // Setup keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.isMenuOpen) {
            toggleMobileMenu();
        }
    });
}

// Update active navigation state
function updateActiveNavigation() {
    const navButtons = document.querySelectorAll('nav button, #mobile-menu button');
    
    navButtons.forEach(button => {
        button.classList.remove('nav-active');
        
        const buttonText = button.textContent.toLowerCase().replace(' ', '');
        if (buttonText === state.currentSection || 
            (buttonText === 'aboutme' && state.currentSection === 'about')) {
            button.classList.add('nav-active');
        }
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Loading state management
function setLoading(isLoading) {
    state.isLoading = isLoading;
    
    if (isLoading) {
        document.body.classList.add('loading');
    } else {
        document.body.classList.remove('loading');
    }
}

// Error handling
function handleError(error, context) {
    console.error(`Error in ${context}:`, error);
    
    // Show user-friendly error message
    const errorMessage = document.createElement('div');
    errorMessage.className = 'fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg z-50';
    errorMessage.textContent = 'Terjadi kesalahan. Silakan coba lagi.';
    
    document.body.appendChild(errorMessage);
    
    setTimeout(() => {
        errorMessage.remove();
    }, 3000);
}

// Image lazy loading
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('loading-skeleton');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        img.classList.add('loading-skeleton');
        imageObserver.observe(img);
    });
}

// Performance optimization
const debouncedScroll = debounce(handleScroll, 16);
window.addEventListener('scroll', debouncedScroll);

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        projects,
        scrollToSection,
        toggleMobileMenu,
        renderProjects
    };
}