const animationContainer = document.getElementById('animation-container');
const infoContainer = document.getElementById('info-container');
const dateElement = document.getElementById('date');
const remadeElement = document.getElementById('remade');
const instructionsElement = document.getElementById('instructions');

let isPaused = false;
let currentIndex = 0;
const images = document.querySelectorAll('.dish-image');

const dishInformation = [
    { date: '2023-01-17', remade: '1 times', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 1' },
    { date: '2023-01-20', remade: '0 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 2.' },
    { date: '2023-01-23', remade: '1 time', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 3.' },
    { date: '2023-01-25', remade: '0 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 4.' },
    { date: '2023-01-28', remade: '3 times', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 5.' },
    { date: '2023-02-01', remade: '1 time', instructions: 'How I learned: Loosely followed recipe for Dish 6.' },
    { date: '2023-02-05', remade: '2 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 7.' },
    { date: '2023-02-09', remade: '3 times', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 8.' },
    { date: '2023-02-12', remade: '1 time', instructions: 'How I learned: Followed step-by-step recipe online for Dish 9.' },
    { date: '2023-02-15', remade: '2 times', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 10.' },
    { date: '2023-02-18', remade: '3 times', instructions: 'How I learned: Loosely followed recipe for Dish 11.' },
    { date: '2023-02-21', remade: '1 time', instructions: 'How I learned: Followed ingredient list but did not need to follow directions for Dish 12.' },
    { date: '2023-02-24', remade: '2 times', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 13.' },
    { date: '2023-02-27', remade: '0 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 14.' },
    { date: '2023-03-02', remade: '1 time', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 15.' },
    { date: '2023-03-05', remade: '2 times', instructions: 'How I learned: Loosely followed recipe for Dish 16.' },
    { date: '2023-03-08', remade: '3 times', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 17.' },
    { date: '2023-03-11', remade: '1 time', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 18.' },
    { date: '2023-03-14', remade: '2 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 19.' },
    { date: '2023-03-17', remade: '3 times', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 20.' },
    { date: '2023-03-20', remade: '1 time', instructions: 'How I learned: Loosely followed recipe for Dish 21.' },
    { date: '2023-03-23', remade: '2 times', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 22.' },
    { date: '2023-03-26', remade: '0 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 23.' },
    { date: '2023-03-29', remade: '1 time', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 24.' },
    { date: '2023-04-01', remade: '2 times', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 25.' },
    { date: '2023-04-04', remade: '3 times', instructions: 'How I learned: Loosely followed recipe for Dish 26.' },
    { date: '2023-04-17', remade: '1 time', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 27.' },
    { date: '2023-05-10', remade: '2 times', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 28.' },
    { date: '2023-05-13', remade: '0 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 29.' },
    { date: '2023-05-16', remade: '1 time', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 30.' },
    { date: '2023-06-09', remade: '2 times', instructions: 'How I learned: Loosely followed recipe for Dish 31.' },
    { date: '2023-06-22', remade: '3 times', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 32.' },
    { date: '2023-07-05', remade: '1 time', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 33.' },
    { date: '2023-07-28', remade: '0 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 34.' },
    { date: '2023-08-01', remade: '0 times', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 35.' },
    { date: '2023-08-04', remade: '1 time', instructions: 'How I learned: Loosely followed recipe for Dish 36.' },
    { date: '2023-08-07', remade: '2 times', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 37.' },
    { date: '2023-09-10', remade: '3 times', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 38.' },
    { date: '2023-09-13', remade: '1 time', instructions: 'How I learned: Followed step-by-step recipe online for Dish 39.' },
    { date: '2023-09-26', remade: '2 times', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 40.' },
    { date: '2023-10-19', remade: '3 times', instructions: 'How I learned: Loosely followed recipe for Dish 41.' },
    { date: '2023-10-22', remade: '1 time', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 42.' },
    { date: '2023-11-05', remade: '2 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 43.' },
    { date: '2023-11-18', remade: '3 times', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 44.' },
    { date: '2023-11-29', remade: '0 time', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 45.' },
    { date: '2023-12-03', remade: '2 times', instructions: 'How I learned: Loosely followed recipe for Dish 46.' },
    { date: '2023-12-16', remade: '3 times', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 47.' },
    { date: '2023-12-20', remade: '1 time', instructions: 'How I learned: Looked at ingredients and took creative liberty with this dish for Dish 48.' },
    { date: '2023-12-23', remade: '2 times', instructions: 'How I learned: Followed step-by-step recipe online for Dish 49.' },
    { date: '2023-12-25', remade: '0 times', instructions: 'How I learned: Watched a YouTube tutorial and followed a step-by-step recipe for Dish 50.' },
    { date: '2024-01-01', remade: '1 time', instructions: 'How I learned: Loosely followed recipe for Dish 51.' },
    { date: '2023-01-05', remade: '2 times', instructions: 'How I learned: Followed ingredient list but did not need to follow directions for Dish 52.' },
    { date: '2023-01-15', remade: '3 times', instructions: 'How I learned: Made substitutions for Dish 53.' },
];



function startAnimation() {
    return setInterval(() => {
        if (!isPaused) {
            hideInformation();
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }
    }, 500);
}

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

let animationInterval = startAnimation();

animationContainer.addEventListener('click', togglePause);
infoContainer.addEventListener('click', hideInformation);

function togglePause() {
    if (isPaused) {
        isPaused = false;
        animationInterval = startAnimation();
    } else {
        showInformation();
        isPaused = true;
        clearInterval(animationInterval);
    }
}

function showInformation() {
    const info = dishInformation[currentIndex];
    infoContainer.style.display = 'flex';
    dateElement.innerText = `Date: ${info.date}`;
    remadeElement.innerText = `Remade: ${info.remade}`;
    instructionsElement.innerText = info.instructions;
}

function hideInformation() {
    infoContainer.style.display = 'none';
}