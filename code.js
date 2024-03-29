function flip(array, n) {
    
    for(f = 0; f < Math.floor(n/2); f++){
        [array[f], array[n-(f+1)]] = [array[n-(f+1)], array[f]];
    }

    return array;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {

    let max = 0;
    for(i = 0; i < array.length; i++){
        max = biggest(array, array.length - i);
        flip(array, max + 1);
        flip(array, array.length-i);
    }

    
    return array;
}

function biggest(array, j){
    
    let max = 0;
    for(k = 0; k < j; k++){
        if(array[k] > array[max]){
            max = k;
        }
    }

    return max;
}