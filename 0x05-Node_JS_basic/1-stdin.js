process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  if (name.endsWith('\n')) {
    process.stdout.write(`Your name is: ${name.slice(0, -1)}\r\n`);
    process.stdin.end();
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
