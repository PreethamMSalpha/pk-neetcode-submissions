class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = [];

        candidates.sort((a,b) => a-b); // sort list

        function dfs(startIndex, currentArray, remaining){
            if(remaining == 0){
                return res.push([...currentArray]);
            }

            if(remaining < 0) return;

            for(let i=startIndex; i<candidates.length; i++){
                // check for previous element and current element, if same skip it
                if(i > startIndex && candidates[i] == candidates[i-1]) continue;
                // push
                currentArray.push(candidates[i]);
                // backtrack
                dfs(i+1, currentArray, remaining - candidates[i])
                // pop
                currentArray.pop()
            }
        }

        dfs(0, [], target);

        return res;
    }
}
