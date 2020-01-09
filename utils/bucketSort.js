/**
 * @file bucketSort.js
 * @author bikedawuwang
 * @description 桶排序
*/

let array = [];
for (let i = 0; i < 10000; i++) {
    let number = Math.floor(Math.random() * 10);
    array.push(number);
}
let  i = 0;
let startTime, endTime;
startTime = Date.parse(new Date());



function bucketSort(arr, bucketSize) {
    if (arr.length === 0) {
        return arr;
    }

    let i;
    let minValue = arr[0];
    let maxValue = arr[0];
    for (i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];               // 找到输入数据中的最小值
        } else if (arr[i] > maxValue) {
            maxValue = arr[i];               // 找到输入数据中的最大值
        }
    }
    // 桶的初始化
    let DEFAULT_BUCKET_SIZE = 10;           // 设置桶子数量
    bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
    let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
    let buckets = new Array(bucketCount);
    for (i = 0; i < buckets.length; i++) {
        buckets[i] = [];
    }
    // 利用映射函数将数据分配到各个桶中
    for (i = 0; i < arr.length; i++) {
        console.log(`第${i+1}次循环`, arr);
        buckets[Math.floor((arr[i] - minValue) / bucketSize)].push(arr[i]);
    }
    arr.length = 0;
    for (i = 0; i < buckets.length; i++) {
        insertionSort(buckets[i]);                     // 使用插入排序对每一个桶子进行排序
        for (let j = 0; j < buckets[i].length; j++) {
            arr.push(buckets[i][j]);
        }
    }
    endTime = Date.parse(new Date());
    return arr;
}

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
    }
    return arr;
}

bucketSort(array);
console.log("TCL: 共计用时：", `${(endTime - startTime) / 1000}秒`);
