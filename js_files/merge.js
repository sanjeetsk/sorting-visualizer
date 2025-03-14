import { delay, disableControls, enableControls } from './sorting.js';

async function mergeSort(start, end) {
    if (start >= end) return;

    const mid = Math.floor((start + end) / 2);
    await mergeSort(start, mid);
    await mergeSort(mid + 1, end);
    await merge(start, mid, end);
}

async function merge(start, mid, end) {
    disableControls();

    const bars = document.querySelectorAll('.bar');
    let left = start;
    let right = mid + 1;
    let temp = [];

    while (left <= mid && right <= end) {
        bars[left].style.background = 'red';
        bars[right].style.background = 'red';
        await delay(50);

        if (parseInt(bars[left].style.height) <= parseInt(bars[right].style.height)) {
            temp.push(bars[left].style.height);
            left++;
        } else {
            temp.push(bars[right].style.height);
            right++;
        }
    }

    while (left <= mid) temp.push(bars[left++].style.height);
    while (right <= end) temp.push(bars[right++].style.height);

    for (let i = start; i <= end; i++) {
        bars[i].style.height = temp[i - start];
        bars[i].style.background = 'green';
        await delay(50);
    }

    enableControls();
}

document.getElementById('merge-sort').addEventListener('click', async () => {
    const bars = document.querySelectorAll('.bar');
    await mergeSort(0, bars.length - 1);
});
