n = int(input())
cnt = 1
# 내 풀이 (이것도 맞는 방법임)
# for _ in range(n):
#     for j in range(n):
#         print(cnt,end="")    
#         if cnt < 9 :
#             cnt += 1
#         else:
#             cnt -= 8
#     print()


# 문제해설 및 다른풀이
for _ in range(n):
    for _ in range(n):
        print(cnt,end='')
        cnt+=1
        if cnt == 10:
            cnt = 1
    print()

