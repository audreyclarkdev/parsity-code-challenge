const findSum = function(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  };
  return sum;
};

const findFrequency = function(array) {
  const obj = {};
  let mostFreq = array[0]
  let maxCount = 1;
  
  for (let i = 0; i < array.length; i++){
    let letter = array[i];
    if (obj[letter]) {
      obj[letter] ++;
    } else {
      obj[letter] = 1;
    };
    if (obj[letter] > maxCount) {
      mostFreq = letter;
      maxCount = obj[letter];
    };
    if (obj[letter] < maxCount) {
      leastFreq = letter;
    };
  };
  return "most: " + mostFreq + ", "+ "least: " + leastFreq;
};

const isPalindrome = function(str) {
  const input = str.toLowerCase();
  const strLen = input.length;
  for (let i = 0; i < strLen / 2; i++) {
    if (input[i] !== input[strLen - 1 - i]) {
      return false;
    };
  };
  return true;
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
