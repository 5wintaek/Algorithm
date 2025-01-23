a,b,c = map(int, input().split())
s = False

for i in range(a, b + 1):
    if i % c != 0:
        s = True
    else:
        s = False
        break

if s:
    print("YES")
else:
    print("NO") 
