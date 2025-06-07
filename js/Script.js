

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

//for loading tab index
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

// function btnEffcet(){
//     const button = document.querySelector('.call-btn');

//     button.addEventListener("mousemove", function(e){
//         const x = e.clientX
//     })
// }