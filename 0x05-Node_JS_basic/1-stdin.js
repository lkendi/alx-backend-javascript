process.stdout.write('Welcome to Holberton School, what is your name? ');

process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
