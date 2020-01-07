/**
 * @file bubbleSortPlus.js
 * @author bikedawuwang
 * @description 冒泡排序Plus版本
*/

let array = [];
for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
}
let startTime, endTime;

function bubbleSortPlus(arr) {
    let len = arr.length;
    if (!len) {
        return [];
    }
} 