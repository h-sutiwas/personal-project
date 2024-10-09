const headlines = [
    {
        title: "Hollow Outbreak in District 7",
        subtitle: "PubSec forces mobilized to contain the threat",
        image: "https://via.placeholder.com/400x200?text=Hollow+Outbreak",
        category: "ALERT",
        details: "A sudden Hollow outbreak has been reported in District 7 of New Eridu. PubSec forces, backed by HIA operatives, have been deployed to contain the situation. Citizens are advised to stay indoors and follow emergency protocols. The source of the outbreak is currently under investigation."
    },
    {
        title: "New Proxy Technology Unveiled",
        subtitle: "Belobog Corp promises safer Hollow interactions",
        image: "https://via.placeholder.com/400x200?text=Proxy+Tech",
        category: "TECH",
        details: "Belobog Corporation has announced a breakthrough in Proxy technology, claiming to offer unprecedented safety in Hollow interactions. The new 'NeoLink' system purportedly allows for deeper neural connections while maintaining user safety. Critics, however, warn of potential privacy concerns."
    },
    {
        title: "Underground Market Crackdown",
        subtitle: "PubSec raids major black market hub",
        image: "https://via.placeholder.com/400x200?text=Market+Raid",
        category: "CRIME",
        details: "In a massive operation, PubSec forces have successfully raided 'The Nexus', a notorious black market hub in the undercity. Illegal Hollow artifacts, weaponry, and banned augmentations were seized. Several high-profile suspects, including rumored gang leaders, are now in custody."
    }
];

let currentIndex = 0;
let isExpanded = false;

function updateHeadline(direction) {
    const headline = headlines[currentIndex];
    const headlineElement = document.querySelector('.headline');
    const newspaperElement = document.querySelector('.newspaper');
    
    // Reset expansion
    isExpanded = false;
    newspaperElement.classList.remove('expanded');
    
    // Prepare the new content
    headlineElement.innerHTML = `
        <div class="headline-content">
            <h2 id="newsTitle">${headline.title}</h2>
            <p id="newsSubtitle">${headline.subtitle}</p>
        </div>
        <div class="headline-image">
            <img id="newsImage" src="${headline.image}" alt="News Image">
        </div>
    `;
    
    document.getElementById('newsCategory').textContent = headline.category;
    document.getElementById('newsDetails').textContent = headline.details;

    // Animate the transition
    headlineElement.style.opacity = 0;
    headlineElement.style.transform = `translateX(${direction === 'next' ? '' : '-'}100%)`;
    
    setTimeout(() => {
        headlineElement.style.transition = 'opacity 0.5s, transform 0.5s';
        headlineElement.style.opacity = 1;
        headlineElement.style.transform = 'translateX(0)';
    }, 50);

    setTimeout(() => {
        headlineElement.style.transition = '';
    }, 550);
}

function nextHeadline() {
    currentIndex = (currentIndex + 1) % headlines.length;
    updateHeadline('next');
}

function prevHeadline() {
    currentIndex = (currentIndex - 1 + headlines.length) % headlines.length;
    updateHeadline('prev');
}

function toggleExpansion() {
    const newspaperElement = document.querySelector('.newspaper');
    isExpanded = !isExpanded;
    
    if (isExpanded) {
        newspaperElement.classList.add('expanded');
    } else {
        newspaperElement.classList.remove('expanded');
    }
}

document.getElementById('nextBtn').addEventListener('click', nextHeadline);
document.getElementById('prevBtn').addEventListener('click', prevHeadline);
document.querySelector('.headline-container').addEventListener('click', toggleExpansion);

// Initialize the first headline
updateHeadline('next');

// Auto-rotate headlines every 10 seconds, but only if not expanded
setInterval(() => {
    if (!isExpanded) {
        nextHeadline();
    }
}, 10000);

// Add a glitch effect on load and periodically
function addGlitchEffect() {
    const newspaper = document.querySelector('.newspaper');
    newspaper.classList.add('glitch');
    setTimeout(() => {
        newspaper.classList.remove('glitch');
    }, 500);
}

// Initial glitch effect
addGlitchEffect();

// Periodic glitch effect
setInterval(addGlitchEffect, 15000);