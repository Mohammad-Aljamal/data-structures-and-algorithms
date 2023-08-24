function insert(sorted, value) {
    let i = 0;
    while (value > sorted[i]) {
        i++;
    }
    while (i < sorted.length) {
        const temp = sorted[i];
        sorted[i] = value;
        value = temp;
        i++;
    }
    sorted.push(value);
}

function insertionSort(input) {
    let sorted = [];
    sorted[0] = input[0];
    for (let i = 1; i < input.length; i++) {
        insert(sorted, input[i]);
    }
    return sorted;
}
console.log(insertionSort([3, 7, 9, 5, 1, 8]))