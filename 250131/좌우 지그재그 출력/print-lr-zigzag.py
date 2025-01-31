n = int(input())

for i in range(n):
    if i % 2 == 0:  # 짝수 행
        for j in range(1, n + 1):
            print(i * n + j, end=' ')
    else:  # 홀수 행
        for j in range(n, 0, -1):
            print(i * n + j, end=' ')
    print()

