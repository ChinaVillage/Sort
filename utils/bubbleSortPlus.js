/**
 * @file bubbleSortPlus.js
 * @author bikedawuwang
 * @description 冒泡排序Plus版本  循环次数少10%左右，数据量大能看出差异
*/

let array = [];
for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
}
let startTime, endTime;

function bubbleSortPlus(arr) {
    let len = arr.length;
    startTime = Date.parse(new Date());
    if (!len) {
        return [];
    }
    for (let i = 0; i < len; i++) {
    let point = true; // 如果在一轮比较中没有出现需要交互的数据，说明数组已经有序。
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                point = false;
            }
        }
        endTime = Date.parse(new Date());
        // console.log(point);
        console.log(`第${i+1}次循环`, arr);
        if (point) return;
    }
    return arr;
}

bubbleSortPlus(array);
console.log("TCL: 共计用时：", `${(endTime - startTime) / 1000}秒`);