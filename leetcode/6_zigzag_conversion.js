/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  const chars = s.split("")
  const zigzag = [];

  let currentColumn = 0

  while (chars.length > 0) {
    let column

    if (numRows == 1 || currentColumn === 0 || currentColumn % (numRows - 1) === 0) {
      column = chars.splice(0, numRows)
    } else {
      column = new Array(numRows).fill(null);
      const elementIndex = numRows - 1 - (currentColumn % (numRows - 1));
      column[elementIndex] = chars.shift()
    }

    zigzag.push(column)

    currentColumn += 1
  }

  let result = '';
  for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < zigzag.length; columnIndex++) {
      const char = zigzag[columnIndex][rowIndex]

      if (char) {
        result += char
      }
    }
  }
  return result;
};
