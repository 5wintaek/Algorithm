m = int(input())

for i in range(m):
    n = int(input())
    # print(n)
    cnt = 0
    

    while n != 1 :
        if n % 2 == 0 :
            n //= 2 
            cnt += 1
        else:
            n = n * 3 + 1 
            cnt += 1
    print(cnt)

        
        

