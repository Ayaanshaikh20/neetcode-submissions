class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestMonotonicSubarray(nums) {
        let inc = 1;
        let dec = 1;
        let maxLen = 1;
        for (let i = 0; i < nums.length - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                inc += 1;
                dec = 1;
            } else if (nums[i] < nums[i+1]) {
                dec+=1;
                inc=1;
            } else {
                dec=1;
                inc=1;
            }
        }
        return Math.max(inc, dec);
    }
}
