class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let R=t.length;
        let L=s.length;
        while(R >= 0) {
            if(t[R] == s[L]) {
                R--
                L--
            } else if(t[R] != s[L]) {
                R--
            }
        }
        if(L < 0) {
            return true
        } else {
            return false
        }
    }
}
