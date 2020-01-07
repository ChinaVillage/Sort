/**
 * @file bubbleSort.js
 * @author bikedawuwang
 * @description 冒泡排序
*/

let array = [];
for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
}
let startTime, endTime;
function bubbleSort(array) {
    let len = array.length;
    startTime = Date.parse(new Date());
    if (!len) {
        return [];
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
        endTime = Date.parse(new Date());
        console.log(`第${i+1}次循环`, array);
    }
    return array;
}


bubbleSort(array);
console.log("TCL: 共计用时：", `${(endTime - startTime) / 1000}秒`);