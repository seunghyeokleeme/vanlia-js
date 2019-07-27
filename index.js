const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  devide: function(a, b) {
    return a / b;
  },
  multiple: function(a, b) {
    return a * b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

let a = 5;
let b = 5;

const plus = calculator.plus(a, b);
console.log(plus);

const minus = calculator.minus(a, b);
console.log(minus);

const devide = calculator.devide(a, b);
console.log(devide);

const multiple = calculator.multiple(a, b);
console.log(multiple);

const power = calculator.power(a, b);
console.log(power);

const result = console.log(
  `when a=5, b=5 => plus(+):${plus}, minus(-):${minus}, devide(/):${devide}, multiple(*):${multiple}, power(**):${power} `
);
/*
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
*/
