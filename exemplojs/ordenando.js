const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr
};

const shuffle = (arr, changes) => {
    for (let i = 0; i < changes; i++) {
        let randIndex1 = Math.floor(Math.random() * arr.length);
        let randIndex2 = Math.floor(Math.random() * arr.length);
        [arr[randIndex1], arr[randIndex2]] = [arr[randIndex2], arr[randIndex1]];
    }
    return arr;
};

const bubble_sort = arr => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
};

const selection_sort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
        }
    }
    if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}

const quick_sort = (arr, start, end) => {
    if (start >= end) {
        return;
    }

    let pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
        if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }

        if (arr[left] <= arr[pivot]) {
        left++;
    }

        if (arr[right] >= arr[pivot]) {
        right--;
    }
    }

    [arr[pivot], arr[right]] = [arr[right], arr[pivot]];

    quick_sort(arr, start, right - 1);
    quick_sort(arr, right + 1, end);

    return arr;
};