class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        let res=[[1]];
        for(let i=0; i<numRows-1; i++) {
            let row = [0,...res[res.length-1],0];
            let left = 0;
            let newrow = [];
            for(let j=1;j<row.length;j++) {
                let sum = row[left] + row[j];
                left++
                newrow.push(sum);
            }
            res = [...res, newrow]
        }
        return res
    }
}
