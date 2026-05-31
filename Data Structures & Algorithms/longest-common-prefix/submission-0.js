class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let sorted = strs.sort();
        let i = 0;
        console.log(sorted);
        while (sorted[0][i] == sorted[sorted.length - 1][i]) {
            i++;
        }
        return sorted[0].substring(0, i);
    }
}
