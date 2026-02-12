
# import pty


n = int(input("Enter number of rows: "))
m = int(input("Enter number of columns: "))


AIML = []

print("Enter matrix elements row by row:")
for i in range(n):
    row = []
    for j in range(m):
        element = int(input(f"Enter element [{i}][{j}]: "))
        row.append(element)
    AIML.append(row)


print("Matrix formed:")
for i in range(n):
    for j in range(m):
        print(AIML[i][j], end=" ")
    print()
