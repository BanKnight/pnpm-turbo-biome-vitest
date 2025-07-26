import { add } from '@my-template/utils'; // 依赖 utils 包

export function log(message: string) {
  console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
}

export function logSum(a: number, b: number) {
  const sum = add(a, b);
  console.log(`[SUM] The sum of ${a} and ${b} is ${sum}`);
  return sum;
}