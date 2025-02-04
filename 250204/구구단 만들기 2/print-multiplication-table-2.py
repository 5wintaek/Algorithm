a,b = map(int,input().split())
# a = 2 b = 4

# a 이상 b 이하 
# b단부터 a단까지 감속
# cnt = b - a

for i in range(2,9,2):
    for j in range(b,a-1,-1):
        print(f"{j} * {i} = {j * i}",end=" ")
        if j != a :
            print('/',end=' ')
    print()