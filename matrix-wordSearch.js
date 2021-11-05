const transpose = function(matrix) {
  const arr = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        arr.push([matrix[i][j]]);
      } else {
        arr[j].push(matrix[i][j]);
      }
    }
  }
  return arr;
};



const wordSearch = function(matrix, str) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
    if (matrix[i].join('').indexOf(str) !== -1) {
      return true;
    }
    matrix[i].reverse();    
    if (matrix[i].join('').indexOf(str) !== -1) {
      return true;
    }
  };

  matrix = transpose(matrix);
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].join('').indexOf(str) !== -1) {
      return true;
    }
  matrix[i].reverse();
    if (matrix[i].join('').indexOf(str) !== -1) {
      return true;
    }
  }
  return false;
};

const str1 = wordSearch([
  ['q', 'c', 't'],
  ['s', 'a', 'g'],
  ['z', 't', 'h'],
], 'gq'); // false
const str2 = wordSearch([
  ['q', 'c', 't'],
  ['s', 'a', 'g'],
  ['z', 't', 'h'],
], 'at'); // true

console.log(str1);
console.log(str2);