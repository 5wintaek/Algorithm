n = int(input())
# arr = list(map(int,input().split()))
arr = list(map(float, input().split()))

cnt = 0
sum_val = 0

for i in range(n):
    # print(arr[i])
    sum_val += arr[i]
    cnt += 1 

avr = round(sum_val / cnt,1)
print(avr)

if avr >= 4.0 :
    print('Perfect')
elif avr >= 3.0 :
    print("Good")
else:
    print("Poor")
