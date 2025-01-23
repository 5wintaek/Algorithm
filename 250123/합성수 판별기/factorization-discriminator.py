n = int(input())
F = False

for i in range(2,n):
    if n % i == 0:
        F = True
        break
    else:
        F = False
if F == True :
    print("C")   
else:
    print("N")