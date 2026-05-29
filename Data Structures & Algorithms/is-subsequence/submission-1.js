class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let R=t.length - 1;
        let L=s.length - 1;
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
