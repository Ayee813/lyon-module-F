

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

function tabLoad(tab) {
    fetch(tab + '.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            setActiveMenuItem(tab);
        })
        .catch(error => console.log('Error loading page:', error));
}