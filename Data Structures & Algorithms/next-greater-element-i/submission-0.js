class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let hash = {};
        let res  = [];
        for(let i=0; i<nums1.length; i++) {
            hash[nums1[i]] = i; 
        }
        for(let j=0; j<nums2.length; j++) {
            if(nums2[j] in hash) {
                if(nums2[j+1] > nums2[j]) {
                    res[hash[nums2[j]]] = nums2[j+1];
                } else {
                    res[hash[nums2[j]]] = -1
                }
            }
        }
        return res
    }
}
