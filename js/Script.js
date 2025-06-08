

document.addEventListener("DOMContentLoaded", () => {

    const video = document.querySelector('.video-wrapper video');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        },
        {
            threshold: 0.5 // play/pause when at least 50% visible
        }
    );

    observer.observe(video);


});
//for offline
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/js/sw.js')
        .then(reg => console.log('SW registered', reg))
        .catch(err => console.log('SW registration failed', err));
    });
  }

//for loading tab index

function setupKeyboardNav() {
    const buttons = document.querySelectorAll('.tab-index button');
    let currentIndex = 0;
    
    document.querySelector('.tab-index').addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            currentIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
            buttons[currentIndex].click();
            buttons[currentIndex].focus();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            currentIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
            buttons[currentIndex].click();
            buttons[currentIndex].focus();
        }
    });
}

function tabLoad(tab, button) {
    fetch(tab + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('tab').innerHTML = data;

            // Remove 'active' class from all buttons
            const buttons = document.querySelectorAll('.tab-index button');
            buttons.forEach(btn => btn.classList.remove('active'));

            // Add 'active' class to the clicked button
            if (button) button.classList.add('active');
        })
        .catch(error => console.log('Error loading page:', error));
}


//for load tab1 is the default content
window.onload = function () {
    const firstButton = document.querySelector('.tab-index button');
    tabLoad('tabPage/tab1', firstButton);
    setupKeyboardNav();
};

function readText() {
    const infoSection = document.querySelector('.info-left');
    const text = infoSection.textContent;
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "fr-FR";
    speechSynthesis.speak(speech);
}

function overlayAdd(el) {
    const overlay = el.querySelector('.overlay');
    overlay.classList.add('overlay-hover');
}

function overlayRemove(el) {
    const overlay = el.querySelector('.overlay');
    overlay.classList.remove('overlay-hover');
}


//call btn effect
const button = document.querySelector(".call-btn");

const readout = document.querySelector("p");

document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector(".call-btn");
    
    button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        button.style.setProperty("--x", x + "px");
        button.style.setProperty("--y", y + "px");
    });
});

//for offline access
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then((registration) => {
            console.log('SW registered successfully');
        })
        .catch((error) => {
            console.log('SW registration failed');
        });
}


  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(() => console.log("Service Worker Registered"))
      .catch((err) => console.error("SW Registration Failed:", err));
  }
