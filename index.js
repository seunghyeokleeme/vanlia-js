const cal = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  multiply: function(a, b) {
    return a * b;
  },
  devide: function(a, b) {
    return a / b;
  }
};
const plus = cal.plus(5, 5);
const minus = cal.minus(5, 5);
const multiply = cal.multiply(5, 5);
const devide = cal.devide(5, 5);

console.log(`${plus}, ${minus}, ${multiply}, ${devide}`);
