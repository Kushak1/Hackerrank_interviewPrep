function countSwaps(a) {

for (let i = 0; i < a.length - 1; i++) {
    
    for (let j = 0; j < a.length - i; j++) {

        if (a[j] > a[j + 1]) {
            let tmp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = tmp;
        }
    }
    
}
