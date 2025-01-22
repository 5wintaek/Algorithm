# 내 제출
# arr = input().split()
# a,b = int(arr[0]),int(arr[1])
# c = str(arr[2])

# while True:
#    print(a*b)

#    if c == 'C':
#         break

# 답지
while(True):
	# 변수 선언 및 입력
	inp = input()
	arr = inp.split()
	w = int(arr[0])
	h = int(arr[1])
	a = arr[2]
		
	# 사각형의 넓이를 출력합니다. 문자 C가 입력되면 종료합니다.
	print(w * h)
		
	if a == 'C':
		break

    

    