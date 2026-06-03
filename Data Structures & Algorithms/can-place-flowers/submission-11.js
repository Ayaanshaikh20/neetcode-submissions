class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        let left = 0;
        let right = 0;
        if (n === 0) return true;
        for (let i = 0; i < flowerbed.length; i++) {
            left = i== 0 ? 0 : flowerbed[i - 1];
            right = i == flowerbed.length-1 ? 0 : flowerbed[i + 1];
            if (flowerbed[i] == 0 && left == 0 && right == 0) {
                flowerbed[i] = 1;
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
