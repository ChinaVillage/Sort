/**
 * @file quickSort.js
 * @author bikedawuwang
 * @description 快排
*/

let array = [];
for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
}
let  i = 0;
let startTime, endTime;
startTime = Date.parse(new Date());
function quickSort(arr, l, r) {
    let len = arr.length;
    let partitionIndex;
    let left = typeof l !='number' ? 0 : l;
    let right = typeof r !='number' ? len - 1 : r;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    endTime = Date.parse(new Date());
    return arr;
}

function partition(arr, left ,right) {    // 分区操作
    let pivot = left,                     // 设定基准值（pivot）
        index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index-1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    // console.log(point);
    console.log(`第${i+1}次循环`, arr);
}

quickSort(array);
console.log("TCL: 共计用时：", `${(endTime - startTime) / 1000}秒`);