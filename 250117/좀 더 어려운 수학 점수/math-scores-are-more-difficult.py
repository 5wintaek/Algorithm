a_math, a_english = map(int, input().split())
b_math, b_english = map(int, input().split())

if a_math > b_math:
    print('A')
elif a_math < b_math:
    print('B')
elif a_english > b_english:  # 수학 점수가 같은 경우 영어 점수 비교
    print('A')
else:  # 수학 점수도 같고 영어 점수도 같을 수는 없다고 문제에서 가정했으므로 else는 b_english > a_english 와 동일
    print('B')