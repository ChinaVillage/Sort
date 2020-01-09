/**
 * @file shellSort.js
 * @author bikedawuwang
 * @description 希尔排序
*/

let array = [];
for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
}

let startTime, endTime;

function shellSort(arr) {
    let len = arr.length,
    temp,
    gap = 1;
    startTime = Date.parse(new Date());
    while (gap < len / 3) {         // 动态定义间隔序列
        gap = gap * 3 + 1;
    }

    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (let i = gap; i < len; i++) {
            temp = arr[i];
            let j = i - gap;
            for (; j >= 0 && arr[j]> temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
            endTime = Date.parse(new Date());
            // console.log(point);
            console.log(`第${i+1}次循环`, arr);
        }
    }
    return arr;
}

shellSort(array);
console.log("TCL: 共计用时：", `${(endTime - startTime) / 1000}秒`);