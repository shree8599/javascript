
   // que 4
   function printPattern(n) {
    for (let i = n; i >= 1; i--) {
      let spaces = " ".repeat((n - i) * 4); // Calculate leading spaces
      let numbers = "";
      for (let j = 1; j <= (2 * i - 1); j++) {
        numbers += j + (j === (2 * i - 1)? "": " "); // Add space unless it's the last number
      }
      console.log(spaces + numbers);
    }
  }
  
  printPattern(5);