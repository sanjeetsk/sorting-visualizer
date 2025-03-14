import { swap, delay, disableControls, enableControls } from './sorting.js';

async function selectionSort() {
    disableControls();

    let bars = document.querySelectorAll('.bar'); // ✅ Initial list of bars

    for (let i = 0; i < bars.length - 1; i++) {
        let minIndex = i;

        bars[minIndex].style.background = 'red';

        for (let j = i + 1; j < bars.length; j++) {
            bars[j].style.background = 'orange';
            await delay();

            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[minIndex].style.height);

            if (height1 < height2) {
                bars[minIndex].style.background = '#007bff';
                minIndex = j;
                bars[minIndex].style.background = 'red';
            } else {
                bars[j].style.background = '#007bff';
            }
        }

        if (minIndex !== i) {
            swap(bars[i], bars[minIndex]);
            bars = document.querySelectorAll('.bar'); // ✅ Update list after swap
        }

        bars[minIndex].style.background = '#007bff';
        bars[i].style.background = 'green'; // ✅ Mark sorted element
    }

    bars[bars.length - 1].style.background = 'green';

    enableControls();
}

document.getElementById('selection-sort').addEventListener('click', async () => {
    await selectionSort();
});
