a,b,c = map(int,input().split())

for i in range(a,b+1):
    if a <= i and b >= i :
        if i % c == 0 :
            print('YES')
            break
else:
   print('NO')


        
        