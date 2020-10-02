
exports.min = function min (array) {
    if ( array === undefined || array.length === 0) {
        return 0;
    }
    let length = array.length;
    let tmp, base = 0;
    let startBase = Math.floor(length / 2);
    let left = 0;
    let right = length - 1;


    for (i = startBase - 3; i <= startBase + 3 ; i++) {
       base = array[i] > array[base] ? i : startBase;
    }

    while (left < right) {
        if (array[left] < array[base]) {
            base = left;
        }
        if (array[right] < array[base]) {
            tmp = array[right];
            array[right] = array[base];
            array[base] = tmp;
        }
        left++;
        right--;    
    }
  return array[base];
}

exports.max = function max (array) {
    if ( array === undefined || array.length === 0) {
        return 0;
    }
    let length = array.length;
    let tmp, base = 0;
    let startBase = Math.floor(length / 2);
    let left = 0;
    let right = length - 1;


    for (i = startBase - 3; i <= startBase + 3 ; i++) {
       base = array[i] > array[base] ? i : startBase;
    }

    while (left < right) {
        if (array[right] > array[base]) {
            base = right;
        }
        if (array[left] > array[base]) {
            tmp = array[left];
            array[left] = array[base];
            array[base] = tmp;
        }
        left++;
        right--;    
    }
  return array[base];
}

exports.avg = function avg (array) {
    if ( array === undefined || array.length === 0) {
        return 0;
    }
    let sum = 0;
    let length = array.length;
    for (i = 0; i < length; i++) {
        sum += array[i];
    }
    let avg = sum / length;
  return avg;
}
