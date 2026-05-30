class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let trimmed = s.trim();
        let lastword = trimmed.split(" ");
        return lastword[lastword.length-1].length;
    }
}
