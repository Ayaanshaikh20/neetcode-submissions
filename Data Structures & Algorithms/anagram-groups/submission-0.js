class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let hash = {};
        for (let i = 0; i < strs.length; i++) {
            let sorted = strs[i].split("").sort().join("");
            if (!hash[sorted]) {
                hash[sorted] = [strs[i]];
            } else {
                hash[sorted].push(strs[i]);
            }
        }
        console.log(hash);
        return [...Object.values(hash)];
    }
}
