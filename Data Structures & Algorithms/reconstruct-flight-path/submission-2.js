class Solution {
    /**
     * @param {string[][]} tickets
     * @return {string[]}
     */
    findItinerary(tickets) {
        const adj = new Map();

        for (const [from, to] of tickets) {
            if (!adj.has(from)) adj.set(from, []);
            adj.get(from).push(to);
        }

        // sort DESCENDING so pop() gives smallest destination
        // "B" > "A" → ["B","A"] → pop() gives "A" first ✓
        for (const [, dests] of adj) {
            dests.sort((a, b) => b.localeCompare(a)); // reverse sort
        }

        const result = [];

        function dfs(airport) {
            const dests = adj.get(airport) || [];

            while (dests.length) {
            dfs(dests.pop()); // O(1) instead of O(n) shift
            }

            result.push(airport);
        }

        dfs('JFK');
        return result.reverse();
    }
}
