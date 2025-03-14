import { delay, disableControls, enableControls } from './sorting.js';

async function insertionSort() {
    disableControls();
    const bars = document.querySelectorAll('.bar');

    for (let i = 1; i < bars.length; i++) {
        let j = i - 1;
        let key = bars[i].style.height;
        bars[i].style.background = 'red';

        await delay();

        while (j >= 0 && parseInt(bars[j].style.height) > parseInt(key)) {
            bars[j + 1].style.height = bars[j].style.height;
            bars[j].style.background = 'orange';
            await delay();
            j--;
        }

        bars[j + 1].style.height = key;
        bars[i].style.background = '#007bff';
    }

    for (let k = 0; k < bars.length; k++) {
        bars[k].style.background = 'green';
    }

    enableControls();
}

document.getElementById('insertion-sort').addEventListener('click', async () => {
    await insertionSort();
});
