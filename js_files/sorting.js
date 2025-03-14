const barsContainer = document.getElementById('bars-container');
const arrSize = document.getElementById('arr_sz');
const generateBtn = document.getElementById('generate-array');
const sortingButtons = document.querySelectorAll('#sorting-type button');
let numBars = arrSize.value;
let speed = 1000 - document.getElementById('speed').value;

// Event listener for changing the number of bars
arrSize.addEventListener('input', () => {
    numBars = arrSize.value;
    generateBars(numBars);
});

// Event listener for changing the sorting speed
document.getElementById('speed').addEventListener('input', () => {
    speed = 1000 - document.getElementById('speed').value;
});

// Centralized delay function
export function delay() {
    return new Promise(resolve => setTimeout(resolve, speed));
}

// Centralized swap function
export function swap(el1, el2) {
    // const style1 = window.getComputedStyle(el1);
    // const style2 = window.getComputedStyle(el2);

    // const height1 = style1.getPropertyValue('height');
    // const height2 = style2.getPropertyValue('height');

    // el1.style.height = height2;
    // el2.style.height = height1;
    // ✅ Swap actual DOM elements instead of just heights
    if (el1 !== el2) {
        barsContainer.insertBefore(el2, el1);
    }
}

// Generate bars based on size
function generateBars(numBars) {
    barsContainer.innerHTML = ''; // Clear previous bars
    const array = [];

    for (let i = 0; i < numBars; i++) {
        // Generate random integer between 10 and 400 (height of bars)
        const height = Math.floor(Math.random() * 400) + 10;
        array.push(height);

        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${height}px`;
        barsContainer.appendChild(bar);
    }
}

// Generate new bars on button click
generateBtn.addEventListener('click', () => {
    enableControls();
    generateBars(numBars);
});

// Disable sorting buttons while sorting
export function disableControls() {
    generateBtn.disabled = true;
    arrSize.disabled = true;
    sortingButtons.forEach(button => button.disabled = true);
}

// Enable sorting buttons after sorting
export function enableControls() {
    generateBtn.disabled = false;
    arrSize.disabled = false;
    sortingButtons.forEach(button => button.disabled = false);
}

// Initial bars generation on load
generateBars(numBars);