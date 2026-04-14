class Solution:

    def encode(self, strs: List[str]) -> str:
        if not strs:
            return ""

        encodedStr = ''
        
        for s in strs:
            encodedStr += str(len(s)) + '#' + s

        return encodedStr

    #['hey', 'hello'] -> 3#hey5#hello

    def decode(self, s: str) -> List[str]:
        if not s:
            return []

        res, i = [], 0

        # while i < len(s):
        #     j = i
        #     while s[j] != '#':
        #         j += 1
        #     length = int(s[i:j]) # 30
        #     res.append(s[j+1 : j+1+length])
        #     i = j+1+length

        while i < len(s):
            j = i
            while j < len(s) and s[j] != '#':  # Added bounds check
                j += 1
            length = int(s[i:j])
            res.append(s[j+1 : j+1+length])
            i = j+1+length

        
        return res



            

