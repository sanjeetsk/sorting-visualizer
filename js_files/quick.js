import { swap, delay, disableControls, enableControls } from './sorting.js';

async function quickSort(low, high) {
    if (low < high) {
        let pivotIndex = await partition(low, high);
        await quickSort(low, pivotIndex - 1);
        await quickSort(pivotIndex + 1, high);
    }
}

async function partition(low, high) {
    let bars = document.querySelectorAll('.bar');
    let pivot = parseInt(bars[high].style.height);
    bars[high].style.background = 'red';

    let i = low - 1;

    for (let j = low; j < high; j++) {
        bars[j].style.background = 'orange';
        await delay();

        if (parseInt(bars[j].style.height) < pivot) {
            i++;
            swap(bars[i], bars[j]);

            // ✅ Update NodeList after swap
            bars = document.querySelectorAll('.bar');
        }

        bars[j].style.background = '#007bff';
    }

    // ✅ Swap pivot to correct position
    swap(bars[i + 1], bars[high]);
    bars = document.querySelectorAll('.bar');

    bars[high].style.background = '#007bff';
    bars[i + 1].style.background = 'green';

    return i + 1;
}

document.getElementById('quick-sort').addEventListener('click', async () => {
    disableControls();

    let bars = document.querySelectorAll('.bar');
    await quickSort(0, bars.length - 1);

    bars.forEach(bar => (bar.style.background = 'green'));

    enableControls();
});
