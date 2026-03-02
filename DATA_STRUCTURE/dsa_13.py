class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 == 1:
            return False
        stack = []

        for i in range(len(s)):
            if s[i] in ['(', '{', '[']:
                stack.append(s[i])
            else:
                if not stack:
                    return False
                top = stack.pop()
                if (s[i] == ')' and top != '(') or \
                   (s[i] == '}' and top != '{') or \
                   (s[i] == ']' and top != '['):
                    return False
        return not stack


class solution(Solution):
    def isvalid(self, s: str) -> bool:
        return self.isValid(s)


if __name__ == "__main__":
    checker = Solution()
    test_cases = ["()", "()[]{}", "(]", "([)]", "{[]}"]

    for value in test_cases:
        print(f"{value} -> {checker.isValid(value)}")