# 十种前端排序算法（还有几种我看懂了在补）

不知道写的对不对，将就看吧！

在node环境下可以测试不同数据量时不同方法性能差异，仅供参考

## 0. 相关概念

|  排序算法   | 时间复杂度（平均）  |  时间复杂度（最坏）   | 时间复杂度（最好）  |  空间复杂度   | 稳定性  |
|  ----  | ----  |  ----  | ----  |  ----  | ----  |
| 插入排序  | O(n²) | O(n²)  | O(n) | O(1)  | 稳定 |

```
稳定：如果a原本在b前面，而a=b，排序之后a仍然在b的前面。

不稳定：如果a原本在b的前面，而a=b，排序之后 a 可能会出现在 b 的后面。

时间复杂度：对排序数据的总的操作次数。反映当n变化时，操作次数呈现什么规律。

空间复杂度：是指算法在计算机内执行时所需存储空间的度量，它也是数据规模n的函数。 
```

## 1. 插入排序

插入排序是排序算法中比较直观的一种，直观大概就是你看到这个函数就知道这货是做排序的

它的工作原理是通过构建有序序列，对于未进行排序的数据，在已经排序的数据中从后向前扫描，找到相应位置后插入！！！

一般情况下，插入排序都采用 in-place 在数组上实现。

1. 从第一个元素起，该元素可以认为已经被排序。
2. 取出下一个元素，在数组中从后向前扫描，找到它的位置并插入。
3. 如果已排序元素大于新元素，则将已排序元素移到下一位置。
4. 重复上一步骤。
5. 将新元素插入到该位置后。
6. 重复步骤2-5，直至排序完成。


