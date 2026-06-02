class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        let hash = {};
        for(let i=0; i<s.length; i++) {
            if(!hash[s[i]]) {
                hash[s[i]] = t[i];
            } else{
                if(hash[s[i]] == t[i]) {
                    continue
                } else {
                    return false
                }
            }
        }
        return true
    }
}
