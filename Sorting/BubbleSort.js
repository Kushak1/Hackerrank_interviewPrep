function countSwaps(a) {

    let count = 0;
for (let i = 0; i < a.length; i++) {
    
    for (let j = 0; j < a.length - 1; j++) {

        if (a[j] > a[j + 1]) {
            let tmp = a[j];
            a[j] = a[j + 1];
            a[j + 1] = tmp;
            count++
        }
    }
    
}