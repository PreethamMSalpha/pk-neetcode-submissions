class Solution:

    def encode(self, strs: List[str]) -> str:
        res = ""

        for word in strs:
            res += str(len(word))+'#'+word

        print('res -> ', res)

        return res

    def decode(self, s: str) -> List[str]:
        if not s:
            return []

        res, i = [], 0

        # 100#abcd...4#ABCD
        # i  j
        
        while i < len(s):
            j = i
            while s[j] != '#':
                j+=1

            length = int(s[i:j])
            word = s[j+1 : j+1+length]
            res.append(word)
            i = j+1+length

        return res

