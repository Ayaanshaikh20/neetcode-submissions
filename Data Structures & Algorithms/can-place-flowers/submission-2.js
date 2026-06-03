class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        for(let i=0; i<flowerbed.length; i++) {
            if(flowerbed[i]==0 && flowerbed[i+1] == 0 && flowerbed[i-1] == 0) {
                flowerbed[i] == 1;
                n--
                if(n==0) {
                    return true
                }
            }
        }
        if(n==0) {
            return true
        } else {
            return false
        }
    }
}
