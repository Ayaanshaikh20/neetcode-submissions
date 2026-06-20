class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.prefix = [];
        let sum = 0;
        for(let i=0; i<nums.length; i++) {
            sum += nums[i];
            this.prefix.push(sum);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        if(left==0) {
            return this.prefix[right]
        } else {
            return this.prefix[right] - this.prefix[left-1]
        }
    }
}
