# n = int(input())
# arr = [1,n]

# for i in range(1,8):
#     arr.append(arr[-1]+arr[-2])
#     if arr[i] > 100 :
#         break
# print(*arr)

    


n = int(input())
arr = [1,n]
cnt = 1

while True :
    cnt += 1
    arr.append(arr[cnt-1] + arr[cnt-2])
    if arr[cnt] > 100 :
        break
print(*arr)

    