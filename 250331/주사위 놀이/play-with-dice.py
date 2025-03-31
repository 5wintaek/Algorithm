arr = list(map(int,input().split()))
count = [0] * 10

for num in arr :
    count[num] += 1
# print(count)
    
for i in range(1,7):
    print(f"{i} - {count[i]}")