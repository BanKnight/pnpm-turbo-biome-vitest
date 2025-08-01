export function log(message: string) {
  console.log(message);
}

export function sum(a: number, b: number) {
  return a + b;
}

export function logSum(a: number, b: number) {
  console.log("from", sum(a, b));
}
