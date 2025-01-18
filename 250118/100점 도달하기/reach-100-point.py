score = int(input())
result = ''
while score <= 100:
    if score >= 90:
        result = 'A'
    elif score >= 80:
        result = 'B'
    elif score >= 70:
        result = 'C'
    elif score >= 60:
        result = 'D'
    else:
        result = 'F'
    print(result,end=' ')
    score+=1
