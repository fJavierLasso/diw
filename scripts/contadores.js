function updateNumber(element, n) {
    element.innerHTML = n;
}

function animateNumber(element, number, interval) {
    let currentNumber = Math.floor(Math.random() * 200) + 200;
    let animateInterval = setInterval(function () {
        updateNumber(element, currentNumber);
        currentNumber++;

        if (currentNumber > number) {
            clearInterval(animateInterval);
        }
    }, interval);
}

let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            switch (entry.target.id) {
                case "eurosAhorrados":
                    animateNumber(entry.target, 99999, 500);
                    break;
                case "vidaGanadas":
                    animateNumber(entry.target, 99999, 200);
                    break;
                case "estresEvitadas":
                    animateNumber(entry.target, 99999, 150);
                    break;
            }
            observer.unobserve(entry.target);
        }
    });
});

window.onload = function () {
    observer.observe(document.querySelector('#eurosAhorrados'));
    observer.observe(document.querySelector('#vidaGanadas'));
    observer.observe(document.querySelector('#estresEvitadas'));
};
