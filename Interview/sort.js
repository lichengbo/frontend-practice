let arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];

/**
 * 冒泡排序
 * 原理：依次比较相邻的两个元素，大的放后面，每次循环保证最后一个数为本次循环最大数
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(n)
 * 稳定
 */
function bubbleSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1 - i; j++) {
      if(arr[j] > arr[j+1]) {
        let tmp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr)) //[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

/**
 * 改进冒泡排序： 设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。
 */
function bubbleSort2(arr) {
  let i = arr.length - 1
  while(i > 0) {
    let pos = 0
    for(let j = 0; j < i; j++) {
      if(arr[j] > arr[j+1]) {
        let tmp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = tmp
        pos = j
      }
    }
    i = pos
  }
  return arr
}
console.log(bubbleSort2(arr))

/**
 * 选择排序
 * 原理: 依次循环找到未排序的最大值，放到最后一位
 * 时间复杂度 O(n^2)
 * 不稳定
 */

function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let maxIndex = 0
    for(let j = 1; j < arr.length - i; j++) {
      if(arr[maxIndex] < arr[j]) {
        maxIndex = j
      }
    }
    let tmp = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = arr[maxIndex]
    arr[maxIndex] = tmp
  }
  return arr
}

console.log(selectionSort(arr))

/**
 * 插入排序
 * 原理：对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
 * 时间复杂度：O(n^2)
 * 稳定
 **/

function insertionSort(arr) {
  var len = arr.length;
  var preIndex, current;
  for (var i = 1; i < len; i++) {
      preIndex = i - 1;
      current = arr[i];
      while (preIndex >= 0 && arr[preIndex] > current) {
          arr[preIndex + 1] = arr[preIndex];
          preIndex--;
      }
      arr[preIndex + 1] = current;
  }
  return arr;
}
// 插入排序优化-二分法查找排序
function binaryInsertionSort(array) {
    for (var i = 1; i < array.length; i++) {
      var key = array[i], left = 0, right = i - 1;
      while (left <= right) {
          var middle = parseInt((left + right) / 2);
          if (key < array[middle]) {
              right = middle - 1;
          } else {
              left = middle + 1;
          }
      }
      for (var j = i - 1; j >= left; j--) {
          array[j + 1] = array[j];
      }
      array[left] = key;
    }

    return array;
}
console.log(binaryInsertionSort(arr))

/**
 * 快速排序
 * 通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
 * 时间复杂度 O(nlogn)
 * 空间复杂度 O(nlogn)
 * 不稳定
 */
function quickSort(arr) {
  if(arr.length <= 1) return arr
  let pivot = arr.splice(0, 1)[0]
  let left = []
  let right = []
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([pivot], quickSort(right))
}
console.log(quickSort(arr))

// 归并排序
