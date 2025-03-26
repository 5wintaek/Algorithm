arr = list(map(int,input().split()))

# print(arr)

## An-1 : 전 항
## 2An-2 : 전전 항

for i in range(2,10):
    arr.append(2*arr[i-2]+arr[i-1])

print(*arr)