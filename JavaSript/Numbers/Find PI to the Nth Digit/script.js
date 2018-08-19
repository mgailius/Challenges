function setPI() {
  do {
    const length = parseInt(prompt('Enter a number between 1 and 50'));
    if (length <= 50) {
      const PI = Math.PI.toFixed(length);
      alert(PI);
      break;
    } else { alert('Enter a valid number'); }
  } while (true);
}

setPI();
