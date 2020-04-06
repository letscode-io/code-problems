/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let result = strs.reduce((result, str) => {
        let sum = hash(str);

        if (!result[sum]) {
            result[sum] = [];
        }

        result[sum].push(str);
        return result;
    }, {});

    return Object.values(result);
};

var hash = function(str) {
    let numberArray = Array(26).fill(0);

    for (let char of str) {
        numberArray[char.charCodeAt() - 97]++;
    }

    return numberArray.join('');
}
