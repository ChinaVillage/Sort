/**
 * @file mergeSort.js
 * @author bikedawuwang
 * @description 归并排序
*/

let array = [];
for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
}
let  i = 0;
let startTime, endTime;

function mergeSort(arr) { // 采用自上而下的递归方法
    let len = arr.length;
    startTime = Date.parse(new Date());
    if (len < 2) {
        return arr;
    }
    let middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    while (left.length>0 && right.length>0) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        }else {
            result.push(right.shift());
        }
    }
    while (left.length)
        result.push(left.shift());
    while (right.length)
        result.push(right.shift());

    endTime = Date.parse(new Date());
    return result;
}

let arr = mergeSort(array);
console.log("TCL: arr", arr);
console.log("TCL: 共计用时：", `${(endTime - startTime) / 1000}秒`);