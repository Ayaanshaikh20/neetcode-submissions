class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0;
        let el = nums[0];
        for(let num of nums) {
            if(count == 0) {
                el = num;
            }
            if(el == num) {
                count+=1
            } else {
                count-=1;
            }
        }
        return el
    }
}
