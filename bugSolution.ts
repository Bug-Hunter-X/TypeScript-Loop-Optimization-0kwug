function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

function printNumbers2(n: number): void {
  if (n <= 0) {
    return;
  }
  console.log(n);
  printNumbers2(n - 1);
}

printNumbers2(5); // This also works fine

// The following is the corrected code
function printNumbers3(n: number): void {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
}

printNumbers3(5); // This works correctly now