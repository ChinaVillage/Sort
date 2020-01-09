/**
 * @file insertionSort.js
 * @author bikedawuwang
 * @description 插入排序
*/

let array = [];
for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
}
let  i = 0;
let startTime, endTime;
startTime = Date.parse(new Date());

function insertionSort(arr) {
    let len = arr.length;
    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
        console.log(`第${i+1}次循环`, arr);
    }
    endTime = Date.parse(new Date());
    return arr;
}

insertionSort(array);
console.log("TCL: 共计用时：", `${(endTime - startTime) / 1000}秒`);

