class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let hash = {};
        let res = [];
        for(let i=1; i<=nums.length; i++) {
            if(nums.includes(i)) {
                hash[i] = 1;
            } else {
                hash[i] = 0;
            }
        }
        for(let num in hash) {
            if(hash[num] == 0) {
                res.push(Number(num))
            }
        }
        return res
    }
}
