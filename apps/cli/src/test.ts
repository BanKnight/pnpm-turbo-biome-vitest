import { log, sum } from "@my-template/core";

export function main() {
  log("CLI tool starting...");

  log("Performing a complex calculation...");

  log("CLI tool finished.");

  console.log("log sum from main ", sum(5, 10));
}
