/**
 * app.js - Main Frontend Logic for "আমার বিদ্যানন্দ"
 */

document.addEventListener('DOMContentLoaded', () => {
    console.log('আমার বিদ্যানন্দ প্ল্যাটফর্ম লোড হয়েছে!');
    initPWA();
    setupInteractions();
    animateCounters(); // কাউন্টার অ্যানিমেশন চালু করার ফাংশন
});

// Step 1: Progressive Web App (PWA) Initialization
function initPWA() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Note: sw.js (Service Worker) ফাইলটি পরে তৈরি করতে হবে
            /*
            navigator.serviceWorker.register('/sw.js').then((registration) => {
                console.log('ServiceWorker registration successful');
            }).catch((err) => {
                console.log('ServiceWorker registration failed: ', err);
            });
            */
        });
    }
}

// Step 2: Setup basic UI interactions
function setupInteractions() {
    // Select all quick service cards to add click listeners (excluding the linked ones)
    const serviceCards = document.querySelectorAll('.glass-card.cursor-pointer:not(a)');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const serviceName = e.currentTarget.querySelector('span').innerText;
            console.log(`Navigating to module: ${serviceName}`);
            // Future implementation: Navigate to respective pages/modals here
        });
    });
}

// Step 3: Counter Animation for Statistics
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 100; // Lower number means faster animation

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Calculate the increment
            const inc = target / speed;

            // Check if current count is less than target
            if (count < target) {
                // Add increment and update UI
                counter.innerText = Math.ceil(count + inc);
                // Call the function again after 15ms
                setTimeout(updateCount, 15);
            } else {
                // Ensure it stops exactly at the target
                counter.innerText = target.toLocaleString('bn-BD'); 
            }
        };
        
        updateCount();
    });
}
