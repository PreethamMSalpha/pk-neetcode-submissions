class Solution:
    def isValid(self, s: str) -> bool:
        res = []
        mapping = {')' : '(', '}' : '{', ']' : '['}

        for char in s:
            if char in mapping:
                if len(res) == 0 or mapping[char] != res[-1]:
                    return False
                res.pop()
            else:
                res.append(char)

        return len(res) == 0
        