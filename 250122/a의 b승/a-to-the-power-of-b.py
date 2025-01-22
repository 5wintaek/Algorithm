a,b = map(int,input().split())

prod = 1 

for i in range(a,b+2):
    prod *= a
    # print(prod)
print(prod)