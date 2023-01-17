module.exports = function check(str, bracketsConfig) {
  const openBrackets = [];
  const closeBrackets = {};
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets.push(bracketsConfig[i][0]);
    closeBrackets[bracketsConfig[i][1]] = bracketsConfig[i][0];
  }

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (openBrackets.includes(str[i])) {
      if ((str[i] === closeBrackets[str[i]]) && (str[i] === stack[stack.length - 1])) {
        stack.pop()
      } else {
        stack.push(str[i]);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      if ((closeBrackets[str[i]]) === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0
}
