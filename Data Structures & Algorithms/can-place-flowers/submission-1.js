class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let i = 1;
        let left = 0;
        let right = i + 1;
        while (i < flowerbed.length - 1) {
            if (flowerbed[i] == 0 && flowerbed[left] == 0 && flowerbed[right] == 0) {
                flowerbed[i] = 1;
                n--
                if(n==0) {
                    return true;
                }
            }
            i++;
            left++;
            right++;
        }
        if(n==0) {
            return true
        } else {
            return false
        }
    }
}
