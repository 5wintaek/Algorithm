n = int(input())

arr = list(map(int,input().split()))
new_arr = []

for i in arr:
    if i % 2 == 0 :
        new_arr.append(i)
print(*new_arr)
        