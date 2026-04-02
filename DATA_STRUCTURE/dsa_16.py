def Merge(nums):
    if len(nums) <= 1:
        return nums

    mid = len(nums) // 2

    left = Merge(nums[:mid])
    right = Merge(nums[mid:])

    return conqure(left, right)

def conqure(left,right):
    n = len(left)
    m = len(right)
    res = []
    i = j = 0

    while i < n and j < m:
        if left[i] > right[j]:
            res.append(right[j])
            j += 1
        else:
            res.append(left[i])
            i += 1

    while i < n:
        res.append(left[i])
        i += 1

    while j < m:
        res.append(right[j])
        j += 1

    return res


arr = [1,-2,3,12,4,-3,21,34]
result = Merge(arr)
print(result)