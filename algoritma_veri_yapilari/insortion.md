##Insertion Sort
***
**Proje 1**

[22,27,16,2,18,6]- *let perform  insertion sort algorithm to this array*

1)  [22,27,16,2,18,6]
2)  [16,22,27,2,18,6]
3)  [2,16,22,27,18,6]
4)  [2,16,18,22,27,6]--> n-1
5)  [2,6,16,18,22,27] --> n

**Insertion sort algorithm analysis**
worst case : n^2
best case : n
avarage case :  n^2 /2 = n^2

**for 18 number, studying case situation

18 number in array is previous number of last number. so it is at n-1.
it is worst case


7,3,5,8,2,9,4,15,6]  perform sort algorithm

[[3,7],5,8,2,9,4,15,6]

[[3,5,7],8,2,9,4,15,6]

[[3,5,7,8],2,9,4,15,6]

[[2,3,5,7,8,]9,4,15,6]