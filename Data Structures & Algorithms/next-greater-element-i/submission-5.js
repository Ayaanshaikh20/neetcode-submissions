class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let res = Array.from({length: nums1.length});
        res[nums1.length-1] = -1;
        let stack = [nums2[nums2.length-1]];
        let hash = {};
        for(let j=0; j<nums1.length-1; j++) {
            if(!hash[nums1[j]]) {
                hash[nums1[j]] = j;
            }
        };
        for(let i=nums2.length-2; i>=0; i--) {
            let stackTop = stack[stack.length-1];
            console.log(nums2[i], stack)
            while(nums2[i] > stackTop && stack.length > 0) {
                stack.pop();
            }
            if(stack.length == 0) {
                res[hash[nums2[i]]] = -1
            } else {
                res[hash[nums2[i]]] = stackTop;
            }
            stack.push(nums2[i]);
        }
        return res
    }
}
