class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let el = nums[0];
        for(let num of nums) {
            if(num !== el) {
                count -= 1;
                el = num;
            } else {
                count += 1;
            }
        }
        return el
    }
}
