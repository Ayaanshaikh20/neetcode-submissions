class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let hash = {};
        for(let i=0; i<s.length; i++) {
            if(!hash[s[i]]) {
                hash[s[i]] = 1;
            } else {
                hash[s[i]] += 1;
            }
        };
        //now decrement each alphabet
        for(let i=0; i<t.length; i++) {
            if(!hash[t[i]]) {
                return false
            } else {
                hash[t[i]] -= 1;
            }
        };  
        for(let j in hash) {
            if(hash[j] != 0) return false
        }     
        return true
    }
}
