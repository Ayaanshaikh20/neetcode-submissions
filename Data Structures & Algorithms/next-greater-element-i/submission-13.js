class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let res = [];
        let stack = [];
        let hash = {};
        for (let j = 0; j < nums1.length; j++) {
            hash[nums1[j]] = j;
        }
        for (let i = nums2.length - 1; i >= 0; i--) {
            while (nums2[i] > stack[stack.length - 1] && stack.length > 0) {
                stack.pop();
            }
            if (nums2[i] in hash) {
                if (stack.length == 0) {
                    res[hash[nums2[i]]] = -1;
                } else {
                    res[hash[nums2[i]]] = stack[stack.length - 1];
                }
            }
            stack.push(nums2[i]);
        }
        return res;
    }
}
