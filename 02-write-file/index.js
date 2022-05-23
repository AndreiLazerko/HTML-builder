
const { stdin, stdout } = process;
const fs = require('fs');
const path = require('path');
const { exit } = require('process');
const writeStream = fs.createWriteStream(path.join(__dirname, 'text.txt'));


stdout.write('Напиши что-нибудь\nили выходи и нажми CTRl+C ');
stdin.on('data', data => {
  if (data.toString().trim() === 'exit') {
    process.exit();
  }
  writeStream.write(data.toString());
});
process.on('exit', () => stdout.write('\nПрощай!'));
process.on('SIGINT', exit);

