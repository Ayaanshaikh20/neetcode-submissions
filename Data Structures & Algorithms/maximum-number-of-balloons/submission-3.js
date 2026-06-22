class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        let required = {
            b: 1,
            a: 1,
            l: 2,
            o: 2,
            n: 1,
        };
        let hash = {};
        let count = Infinity;
        for (let i = 0; i < text.length; i++) {
            if (!hash[text[i]]) {
                hash[text[i]] = 1;
            } else {
                hash[text[i]] += 1;
            }
        }
        for(let i in required) {
            let a = hash[i] || 0
            let available = Math.floor(a/required[i]);
            if(available < count) {
                count = available;
            }
        }
        return count;
    }
}
