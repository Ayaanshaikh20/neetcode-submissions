class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let sorted = strs.sort();
        let i = 0;
        let j = 0;
        let index = 0;
        console.log(sorted)
        while(i<sorted[0].length && i<sorted[sorted.length-1].length) {
            if(sorted[0][i] == sorted[sorted.length-1][i]) {
                index++
            } else {
                break
            }
            i++;
        }
        return sorted[0].substring(0, index)
    }
}
