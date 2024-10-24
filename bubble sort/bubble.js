// UNOPTIMIZED VERSION OF BUBBLE SORT

function bubbleSort(arr){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);


// examples 
function bubbleSort(array) {
  let n = array.length
  while (n > 0) {
    let lastModifiedIndex = 0
    for (let currentIndex = 1; currentIndex < n; currentIndex++) {
      // if the item at the previous index is greater than the item at the `currentIndex`, swap them
      if (array[currentIndex - 1] > array[currentIndex]) {
        // swap
        let temp = array[currentIndex - 1]
        array[currentIndex - 1] = array[currentIndex]
        array[currentIndex] = temp
        // save the index that was modified
        lastModifiedIndex = currentIndex
      }
    }
    // save the last modified index so we know not to iterate past it since all proceeding values are sorted
    n = lastModifiedIndex
  }
}

let array = [12, 11, 15, 10, 9, 1, 2, 3, 13, 14, 4, 5, 6, 7, 8]
bubbleSort(array)

// big o notatio is : n2 ( ava , worst)
// is good when its already sorted and be o(n)
