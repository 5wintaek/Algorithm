start, end = map(int, input().split())

# Write your code here!
cnt = 0

for i in range(start,end+1):
    complete = 0 
    # print(i)
    for j in range(1,i):
        # print(j)
        if i % j == 0:
            complete += j
    if complete == i :
        cnt += 1

print(cnt)
