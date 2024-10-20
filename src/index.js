module.exports = function check(str, bracketsConfig) {
  const stack = [];
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (bracketsConfig.find((el) => el[0] === char)) {
      stack.push(char);
    }

    const bracketsPairArr = bracketsConfig.find((el) => el[1] === char);
    if (bracketsPairArr) {
      if (stack[stack.length - 1] !== bracketsPairArr[0]) {
        return false;
      }
      stack.pop(char);
    }
  }
  return stack.length === 0;
};
