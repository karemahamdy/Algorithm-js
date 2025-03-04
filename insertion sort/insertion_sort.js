function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
      for (var j = i - 1; j >= 0; --j) {
        if (arr[j] > currentVal) {
          arr[j+1] = arr[j]
        } else {
          break;
        }
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])