class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        let hash = {};
        for(let i=0; i<magazine.length; i++) {
            if(!hash[magazine[i]]) {
                hash[magazine[i]] = 1
            } else {
                hash[magazine[i]] += 1;
            }
        }
        for(let j=0; j<ransomNote.length; j++) {
            if(!hash[ransomNote[j]]) {
                return false
            } else if(hash[ransomNote[j]] > 0) {
                hash[ransomNote[j]] -= 1;
            } else if (hash[ransomNote[j]] == 0) {
                return false
            }
        }
        return true
    }
}
