class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let hash = {};
        let even = 0;
        let odd = 0;
        for(let i=0; i<s.length; i++) {
            if(!hash[s[i]]) {
                hash[s[i]] = 1;
            } else {
                hash[s[i]] += 1;
            }
        }
        for(let al in hash) {
            if(hash[al] %2 ==0 && hash[al] > even) {
                even = hash[al]
            } else if (hash[al] %2 !== 0 && hash[al] > odd) {
                odd = hash[al]
            }
        }
        return even - odd
    }
}
