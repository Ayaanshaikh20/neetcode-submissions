class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let maxOdd = 0;
        let maxEven = 0;
        let hash = {};
        for(let i=0; i<s.length; i++) {
            if(!hash[s[i]]) {
                hash[s[i]] = 1;
            } else {
                hash[s[i]] +=1;
            }
        }
        for(let h in hash) {
            if(hash[h] % 2 == 0 && hash[h] > maxEven) {
                maxEven = hash[h]
            } else if (hash[h] % 2 !== 0 && hash[h] > maxOdd) {
                maxOdd = hash[h]
            }
        }
        return Math.abs(maxOdd - maxEven)
    }
}
