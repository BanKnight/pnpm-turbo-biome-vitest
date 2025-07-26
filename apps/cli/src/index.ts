import { log, logSum } from '@my-template/logger';
import { formatGreeting } from '@my-template/utils';

function main() {
  log('CLI tool starting...');

  const greeting = formatGreeting('CLI User');
  console.log(greeting);

  log('Performing a complex calculation...');
  logSum(20, 22);

  log('CLI tool finished.');
}

main();