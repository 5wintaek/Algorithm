# 내코드
# cnt = 0

# while cnt <= 3 :
#     n = int(input())
#     if n % 2 == 0 :
#         print(n // 2)
#         cnt +=1

# 변수 선언 및 입력
cnt = 0
	
while True:
	# 변수 선언 및 입력
	n = int(input())
	
	# n이 홀수라면 아무 작업도 하지 않고, n이 짝수라면 n/2를 출력하는 작업을 3번 한 뒤 종료합니다.
	if n % 2 == 1:
		continue
		
	print(n // 2)
	cnt += 1
		
	if cnt >= 3:
		break
