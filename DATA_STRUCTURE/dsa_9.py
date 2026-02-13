# # reshape the matrix and print the elements in the new shape



# n = int(input("Enter number of rows: "))
# m = int(input("Enter number of columns: "))

# AIML = []
# print("Enter matrix elements row by row:")
# for i in range(n):
#     row = []
#     for j in range(m):
#         element = int(input(f"Enter element [{i}][{j}]: "))
#         row.append(element)
#     AIML.append(row)

# print("Matrix formed:")
# for i in range(n):
#     for j in range(m):
#         print(AIML[i][j], end=" ")
#     print()





# Shorter version using list comprehension
n = int(input("Rows: "))
m = int(input("Cols: "))
AIML = [[int(input(f"[{i}][{j}]: ")) 

for j in range(m)]
    for i in range(n)]
print("Matrix:")
[print(*row) for row in AIML]

# Reshape the matrix
new_r = int(input("New rows: "))
new_c = int(input("New cols: "))
matrix = [element for row in AIML for element in row]  
if len(matrix) == new_r * new_c:
    reshaped = [[matrix[i*new_c + j] 
for j in range(new_c)] 
    for i in range(new_r)]
    print("Reshaped Matrix:")
    [print(*row) for row in reshaped]
else:
    print(f"Cannot reshape {n}x{m} to {new_r}x{new_c}")
