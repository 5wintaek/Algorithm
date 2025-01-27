n = int(input())
plus = 2

for i in range(0, 2 * n, 2):
    for j in range(11, n * plus - 1 + 11, 2):
        print(j + i, end=' ')
    print()
