class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        hash_set = set()

        for i in range(9):
            for j in range(9):
                value = board[i][j]

                if value != '.':
                    if value+'R'+str(i) in hash_set \
                        or value+'C'+str(j) in hash_set \
                        or value+'B'+str(i//3)+str(j//3) in hash_set:
                        return False
                    else:
                        hash_set.add(value+'R'+str(i))
                        hash_set.add(value+'C'+str(j))
                        hash_set.add(value+'B'+str(i//3)+str(j//3))

                

        return True