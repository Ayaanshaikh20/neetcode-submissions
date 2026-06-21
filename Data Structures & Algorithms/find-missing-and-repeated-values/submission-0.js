class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let res = [];
        let hash = {};
        let final = [];
        for (let i = 0; i < grid.length; i++) {
            res = [...res, ...grid[i]];
        }
        for (let i = 0; i < res.length; i++) {
            if (!hash[res[i]]) {
                hash[res[i]] = 1;
            } else {
                hash[res[i]] += 1;
            }
        }
        for (let i=1; i<=res.length; i++) {
            if(!(i in hash)) {
                hash[i] = 0;
            }
        }
        for(let i in hash) {
            if(hash[i] > 1) {
                final[0] = i
            } else if (hash[i] == 0) {
                final[1] = i
            }
        }
        return final;
    }
}
