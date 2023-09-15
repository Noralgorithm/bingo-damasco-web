export function obtainNumberDigits(n: number) {
  const digits: number[] = [];

  while (n > 0) {
    const d = n % 10;
    digits.push(d);
    n = Math.floor(n / 10);
  }

  return digits.reverse();
}
