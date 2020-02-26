module.exports = (num1, num2) => {
  const n1 = Number(num1);
  const n2 = Number(num2);
  return {
    sum() {
      return n1 + n2;
    },
    mult() {
      return n1 * n2;
    }
  }
};
