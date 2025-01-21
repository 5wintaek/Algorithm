n = int(input())
a = 0  # 교실 청소 횟수
b = 0  # 복도 청소 횟수
c = 0  # 화장실 청소 횟수

for i in range(1, n + 1):
    if i % 12 == 0:  # 화장실 청소 (가장 긴 주기, 최우선)
        c += 1
    elif i % 3 == 0:  # 복도 청소 (화장실 청소에 겹치지 않는 경우만)
        b += 1
    elif i % 2 == 0:  # 교실 청소 (화장실, 복도 청소에 겹치지 않는 경우만)
        a += 1

print(a, b, c, end=" ")