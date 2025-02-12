n = int(input())

cnt = 0 # 통과한 학생 수

for i in range(n):
    arr = list(map(int,input().split()))
    a = sum(arr)
    count = len(arr)
    avg = round(a / count , 2)
    if avg >= 60 :
        print("pass")
        cnt+=1
    else:
        print("fail")
print(cnt)