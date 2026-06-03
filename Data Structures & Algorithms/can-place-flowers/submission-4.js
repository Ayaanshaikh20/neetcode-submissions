class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let left = 0;
        let right = flowerbed[1];
        for (let i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i] == 0 && left == 0 && right == 0) {
                flowerbed[i] = 1;
                left = flowerbed[i];
                right = flowerbed[i + 1];
                n--;
            }
            if (n == 0) {
                return true;
            }
        }
        if (n == 0) {
            return true;
        } else {
            return false;
        }
    }
}
