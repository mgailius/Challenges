const setE = () => {
  do {
    const length = parseInt(prompt('| Find E to the Nth Digit\n| Enter a number between 1 and 50'));
    if (length <= 50) {
      const PI = Math.E.toFixed(length);
      alert(PI);
      break;
    } else { alert('Enter a valid number'); }
  } while (true);
}

setE();
