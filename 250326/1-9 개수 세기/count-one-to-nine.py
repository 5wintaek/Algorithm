n = int(input())
numbers = list(map(int, input().split()))
counts = [0] * 9  # 인덱스 0~8 → 숫자 1~9

for num in numbers:
    #숫자 1은 counts[0]에 매핑되므로 num - 1 사용.
    counts[num - 1] += 1
# print(counts)

for i in range(9):
    print(counts[i])