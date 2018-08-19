let a, b, result;
const numLength = parseInt(prompt('| Fiboncci generator\n| Enter a number'));

a = 0;
b = 1;
result = b;

document.write("Fibbonacci Sequence up to your number" + "<br/>")

for (var i = 0; i < numLength; i++) {
  document.write(result + "<br/>");
  result = a + b;
  a = b;
  b = result;
}
