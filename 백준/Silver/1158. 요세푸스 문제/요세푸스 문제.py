def function(n,k):
    people = list(range(1,n+1))
    result = []
    index = 0
    # print(len(people))

    while people :
        index = (index + k - 1) % len(people) # -1 을 한 이유는 index 0번쨰부터 시작해서
        result.append(people.pop(index))
        # print(result)
    print("<", ", ".join(map(str, result)), ">", sep='')


n, k = map(int, input().split())
function(n,k)