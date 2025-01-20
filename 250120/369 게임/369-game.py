n = int(input())
# 내코드 
# i = n

# for i in range(1,n):
#     if n % 2 == 1 :
# 		print(i,end=' ')
# 	elif n == 3 or n == 6 or n == 9:
# 		print(0,end=' ')
		

		 
for i in range(1, n+1):
	if i % 3 == 0:
		print("0", end=" ")
	elif i % 10 == 3 or i % 10 == 6 or i % 10 == 9:
		print("0", end=" ")
	elif i // 10 == 3 or i // 10 == 6 or i // 10 == 9:
		print("0", end=" ")
	else:
		print(i, end=" ")

# 세 번째 if 문에서는 10의 자릿수가 3, 6, 9중 하나인지 확인합니다. (ex. 31, 61...)
# elif i // 10 == 3 or i // 10 == 6 or i // 10 == 9:
		# print("0", end=" ")	