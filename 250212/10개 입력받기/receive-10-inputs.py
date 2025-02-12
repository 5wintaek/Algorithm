arr = list(map(int,input().split()))

cnt = 0
sum_val = 0

for i in arr:
    if i == 0:
        break
    sum_val += i
    cnt += 1
avg = round(sum_val / cnt, 1)

print(sum_val, avg)