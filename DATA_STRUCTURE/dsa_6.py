
# # add sum

# class Solution:
#     def twoSum(self, nums, target):
#         seen = {}
#         for i, num in enumerate(nums):
#             comp = target - num
#             if comp in seen:
#                 return [seen[comp], i]
#             seen[num] = i
#         return []

# if __name__ == "__main__":
#     nums = [2, 7, 11, 15]
#     target = 9
#     solution = Solution()
#     print(solution.twoSum(nums, target))



#  annagram
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sorted_s = sorted(s)
        sorted_t = sorted(t)
        return sorted_s == sorted_t


if __name__ == "__main__":
    s = "anagram"
    t = "nagaram"
    solution = Solution()
    print(solution.isAnagram(s, t))