class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        let res = [];
        for (let i = 0; i < words.length; i++) {
            for (let j = i + 1; j < words.length; j++) {
                if (words[i].includes(words[j])) {
                    res.push(words[j]);
                } else if (words[j].includes(words[i])) {
                    res.push(words[i]);
                }
            }
        }
        return res;
    }
}
