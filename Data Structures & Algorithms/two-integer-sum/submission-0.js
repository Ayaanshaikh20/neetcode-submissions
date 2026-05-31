class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let hash={};
        for(let i=0; i<nums.length; i++) {
            let diff = target - nums[i];
            if(!(diff in hash)) {
                hash[nums[i]] = i;
            } else {
                return [hash[diff], i]
            }
        }
    }
}
