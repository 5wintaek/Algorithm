start,end = map(int,input().split())

count = 0 # 약수 3개인 숫자 개수


for i in range(start,end+1):
    cnt = 0 # 약수 초기화
    for j in range(1,i+1):
        if i % j == 0 :
            cnt += 1
    if cnt == 3 :
        count += 1
print(count)