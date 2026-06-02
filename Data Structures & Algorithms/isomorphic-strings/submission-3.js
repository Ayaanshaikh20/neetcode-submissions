class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        let hashs = {};
        let hasht = {};
        for(let i=0; i<s.length; i++) {
            if(!hashs[s[i]] && !hasht[t[i]]) {
                hashs[s[i]] = t[i];
                hasht[t[i]] = s[i];
            } else{
                if(hashs[s[i]] == t[i] && hasht[t[i]] == s[i]) {
                    continue
                } else {
                    return false
                }
            }
        }
        return true
    }
}
