document.addEventListener("DOMContentLoaded", function () {
    // Your existing Intersection Observer code
    var aboutSection = document.querySelector('.about');

    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    var aboutObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.querySelector('.abouttext').classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    aboutObserver.observe(aboutSection);
});
