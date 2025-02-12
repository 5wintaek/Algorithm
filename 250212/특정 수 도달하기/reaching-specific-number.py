 # 마지막을 제외 -> slice 
 
arr = list(map(int,input().split()))

sum_val = 0 # 합계
count = 0 # 평균 개수

for i in arr:
    if i >= 250:
        break
    sum_val += i
    count += 1
    
if count == 0:
    sum_val = sum(arr)
    count = len(arr)

average = round(sum_val / count , 1)

print(sum_val,average)
    
    
    

