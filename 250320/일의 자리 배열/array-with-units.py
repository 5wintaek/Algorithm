arr = list(map(int,input().split()))

a = arr
# print(a)
# 1의 자리로 채우라해서 % 10 을 하면 일의자리를 구할 수 있음

for i in range(3,11):
    a.append((a[-1] + a[-2])%10)

print(*a)
