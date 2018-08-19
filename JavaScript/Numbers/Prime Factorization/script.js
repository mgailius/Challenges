const findPrimeFactors = () => {
  do {
    const baseNum = parseInt(prompt(`Prime Factorization\nEnter a positive integer to factorise it`));
    if (isNaN(baseNum)) {
      alert(`Enter a valid number`);
    } else if (baseNum === 1) {
      alert(`1 is neither a prime number nor a composite number`);
    } else if (baseNum <= 0) {
      alert(`Please enter a positive integer`);
    } else {
      let num = baseNum;
      var primeFactors = [];

      //1.
      while (num % 2 === 0) {
        primeFactors.push(2);
        num /= 2;
      }

      //2.
      var sqrtnum = Math.sqrt(num);
      for (var i = 3; i <= sqrtnum; i++) {
          while (num % i === 0) {
            primeFactors.push(i);
            num /= i;
          }
      }

      //3.
      if (num > 2) {
        primeFactors.push(num);
      }

      primeFactors = primeFactors.join(`, `);
      document.getElementById(`output`).innerHTML=`| Prime Factorization for number ${baseNum} <br><br> | ${primeFactors}`;
      break;
    }

  } while (true);
  }

findPrimeFactors();
