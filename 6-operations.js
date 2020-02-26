const operations = require('./modules/operations');

const args = process.argv;

const op = args[2] || null;

const num1 = args[3] || 0;
const num2 = args[4] || 0;

if (op) {
  const result = operations(num1, num2)[op]();
  console.log(`Result of ${op} is ${result}`);
} else {
  console.log('No operation suplied');
}