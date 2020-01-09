/**
 * @file selectSort.js
 * @author bikedawuwang
 * @description 选择排序
*/

let array = [];
for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
}

let startTime, endTime;

function selectSort(arr) {
    let len = arr.length;
    let minIndex, temp;
    startTime = Date.parse(new Date());
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {    // 寻找最小的数
                minIndex = j;                // 将最小数的索引保存
            }
        }
        endTime = Date.parse(new Date());
        // console.log(point);
        console.log(`第${i+1}次循环`, arr);
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

selectSort(array);
console.log("TCL: 共计用时：", `${(endTime - startTime) / 1000}秒`);