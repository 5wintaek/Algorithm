# 변수 선언 및 입력
n = int(input())

# 각 칸의 정사각형에 알맞은 값을 출력합니다.
for i in range(1, n + 1):
	for j in range(1, n + 1):
		print(i * (n - j + 1), end=" ")
	print()
