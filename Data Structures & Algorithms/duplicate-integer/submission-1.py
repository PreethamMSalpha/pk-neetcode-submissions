class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        dup = set()

        for num in nums:
            if num not in dup:
                dup.add(num)
            else:
                return True

        return False
        
        