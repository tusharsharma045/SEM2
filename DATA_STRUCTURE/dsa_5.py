# l1 = (1,2,3,4,5,3)
# print(duplicates := set([x for x in l1 if l1.count(x) > 1]))
nums = [1, 2, 3, 4, 5, 3, 2, 6, 7, 8, 9]

def duplicate_elements(nums):

    duplicates = set()
    seen = set()
    for num in nums:
        if num in seen:
            duplicates.add(num)
        else:
            seen.add(num)
    return duplicates