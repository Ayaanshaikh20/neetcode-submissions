class Solution {
    findDisappearedNumbers(nums) {
        let hash = {};
        let res = [];

        for (let num of nums) {
            hash[num] = 1;
        }

        for (let i = 1; i <= nums.length; i++) {
            if (!(i in hash)) {
                hash[i] = 0;
            }
        }

        for (let num in hash) {
            if (hash[num] === 0) {
                res.push(Number(num));
            }
        }

        return res;
    }
}