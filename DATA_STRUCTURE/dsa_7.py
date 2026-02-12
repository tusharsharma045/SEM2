


n = int(input("Enter number of rows: "))
m = int(input("Enter number of columns: "))
# AIML = []
# for i in range(n):
#     l1 = []
#     for j in range(m):
#         l1.append(input("Enter element: "))
#     AIML.append(l1)
#     break
# print(AIML)


from dsa_8 import AIML


for i in range(n):
    for j in range(m):
        print(AIML[i][j], end=" ")
    print()

