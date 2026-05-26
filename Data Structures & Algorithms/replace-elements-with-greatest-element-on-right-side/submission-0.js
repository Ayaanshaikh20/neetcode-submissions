    class Solution {
        /**
         * @param {number[]} arr
         * @return {number[]}
         */
        replaceElements(arr) {
            let maxSoFar = -1;
            for(let i=arr.length-1; i>=0; i--) {
                if(maxSoFar < arr[i]) {
                    let temp = maxSoFar;
                    maxSoFar = arr[i];
                    arr[i] = temp
                } else {
                    arr[i] = maxSoFar;
                }
            }
            return arr
        }
    }
