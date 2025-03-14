import { swap, delay, disableControls, enableControls } from './sorting.js';

async function bubbleSort() {
    disableControls(); // ✅ Disable controls before sorting
    let bars = document.querySelectorAll('.bar');
    let swapped;

    for (let i = 0; i < bars.length - 1; i++) {
        swapped = false;
        for (let j = 0; j < bars.length - i - 1; j++) {
            // Change color of bars being compared
            bars[j].style.background = 'red';
            bars[j + 1].style.background = 'red';

            // Add delay to visualize comparison
            await delay();

            let height1 = parseInt(bars[j].style.height);
            let height2 = parseInt(bars[j + 1].style.height);

            if (height1 > height2) {
                swap(bars[j], bars[j + 1]);
                swapped = true;

                // ✅ Update NodeList after swap
                bars = document.querySelectorAll('.bar');
            }

            // Reset color after comparison
            bars[j].style.background = '#007bff';
            bars[j + 1].style.background = '#007bff';
        }
        // Mark the last sorted element as green
        bars[bars.length - i - 1].style.background = 'green';

        if (!swapped) break; // If no swaps, array is sorted
    }

    // Mark remaining elements as sorted
    bars.forEach(bar => (bar.style.background = 'green'));

    enableControls(); // ✅ Enable controls after sorting
}

document.getElementById('bubble-sort').addEventListener('click', async () => {
    await bubbleSort();
});