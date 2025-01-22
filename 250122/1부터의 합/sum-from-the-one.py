n = int(input())
sum_val = 0

for i in range(1,101,1):
    sum_val += i
    # print(sum_val)
    if sum_val >= n :
        print(i)
        break



