class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let hash = {};
        let majority = 0;
        let el = 0;
        for(let num in nums) {
            if(!hash[nums[num]]) {
                hash[nums[num]] = 1;
            } else {
                hash[nums[num]] += 1;
            }
        }
        for(let key in hash) {
            if(hash[key] > majority) {
                el = key;
                majority = hash[key];
            }
        }
        return el
    }
}
