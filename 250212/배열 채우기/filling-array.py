arr = list(map(int,input().split()))

arr1 = []

for i in range(len(arr)):
    if arr[i] == 0:
        break
    arr1.append(arr[i])
for j in arr1[::-1]:
    print(j,end=" ")
    

