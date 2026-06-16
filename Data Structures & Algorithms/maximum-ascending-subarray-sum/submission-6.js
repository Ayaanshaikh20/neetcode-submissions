class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let maxSum = nums[0];
        let sum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                sum += nums[i];
                if (maxSum < sum) {
                    maxSum = sum;
                }
            } else {
                if (maxSum < sum) {
                    maxSum = sum;
                }
                sum = nums[i];
            }
        }
        return maxSum;
    }
}
