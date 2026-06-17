class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let hash ={};
        for(let i in arr) {
            if(!hash[arr[i]]) {
                hash[arr[i]] = 1;
            } else {
                hash[arr[i]] += 1;
            }
        }
        let distArr = [];
        for(let num in hash) {
            if(hash[num] == 1) {
                distArr.push(num)
            }
        }
        if(distArr.length < k) {
            return ""
        } else {
            return distArr[k-1];
        }
    }
}
