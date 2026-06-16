class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let maxSum = 0;
        let sum = nums[0];
        for (let i = 1; i < nums.length; i++) {
            if (nums[i] > nums[i - 1]) {
                sum += nums[i];
                if (maxSum < sum) {
                    maxSum = sum;
                }
            } else if (nums[i] < nums[i - 1]) {
                maxSum = nums[i-1]
                sum = nums[i];
            }
        }
        console.log(sum, maxSum);
        return sum;
    }
}
