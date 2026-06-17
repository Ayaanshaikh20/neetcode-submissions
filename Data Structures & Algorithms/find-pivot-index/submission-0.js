class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let rightSum =0;
        let leftSum=0;
        let totalSum = nums.reduce((acc,total) => total += acc,0);
        for(let i=0; i<nums.length; i++) {
            rightSum = totalSum - leftSum - nums[i];
            if(rightSum == leftSum) {
                return i
            }
            leftSum += nums[i];
        }
        return -1
    }
}
