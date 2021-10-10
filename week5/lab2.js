function factorial(n) {
  for (let i = 1; i <= n; i++) {
    n *= i;
    print(n);
  }
  return n;
}

factorial(3);
