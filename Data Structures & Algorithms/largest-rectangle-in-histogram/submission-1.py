class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        maxArea = 0
        stack = []
        length = len(heights)

        for index, height in enumerate(heights):
            start = index
            while start and height < stack[-1][1]:
                stackIndex, stackHeight = stack.pop()
                maxArea = max(maxArea, (index - stackIndex) * stackHeight)
                start = stackIndex
            stack.append((start, height))
        
        for index, height in stack:
            maxArea = max(maxArea, (length - index) * height)

        return maxArea