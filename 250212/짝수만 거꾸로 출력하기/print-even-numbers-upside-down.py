n = int(input())
arr = list(map(int,input().split()))

arr2 = [] # 추가적으로 받아야 할 arr

for i in arr:
    if i % 2 == 0:
        arr2.append(i)
for j in arr2[::-1]:
    print(j,end=" ")
    
    


    