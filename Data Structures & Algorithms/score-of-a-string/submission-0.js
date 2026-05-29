class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
       let L = 0;
       let R = 1;
       let sum = 0;
       while(R<s.length) {
        sum += Math.abs(s.charCodeAt(L) - s.charCodeAt(R)); 
        L++
        R++
       };
       return sum;
    }
}
