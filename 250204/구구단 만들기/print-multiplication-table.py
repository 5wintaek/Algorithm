a,b = map(int,input().split())

# print(a,b)
# a = 2 b = 6



for i in range(1,10):
    for j in range(b,a-1,-1):
        if j % 2 == 0:
            print(f"{j} * {i} = {j * i}",end=" ")
            if j != a :
                print("/", end=" ")
    print()
    

