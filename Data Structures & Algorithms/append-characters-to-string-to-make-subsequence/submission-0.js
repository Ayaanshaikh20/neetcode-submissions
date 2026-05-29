class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let L = 0;
        let R = 0;
        while(L<s.length) {
            if(s[L] == t[R]) {
                L++
                R++
            } else {
                L++
            };
        }
        return t.length - R;
    }
}
