class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let l=0;
        let r=s.length-1;
        while(l<r) {
            if(s[l] !== s[r]) {
                let leftSkip = s.slice(l+1, r+1);
                let rightSkip = s.slice(l, r);
                if(leftSkip == leftSkip.split('').reverse().join('')) {
                    return true
                } else if (rightSkip == rightSkip.split('').reverse().join('')) {
                    return true
                }
                return false
            } else {
                l++;
                r--;
            }
        }
        return true
    }
}
