/*eslint-disable quotes */
import { writeFile, readFileSync } from "fs";
 
writeFile("./02-write-file/text.txt", "Hello мир!", function(error){
  if(error) throw error; // если возникла ошибка
  console.log(" Содержимое файла:");
  let data = readFileSync("./02-write-file/text.txt", "utf8");
  console.log(data);  // выводим считанные данные
});






// const { stdin, stdout } = process;
// const fs = require('fs');
// const path = require('path');

// process.on('exit', () => stdout.write('\nSee you later\n'));
// process.on('SIGINT', () => {
//   process.exit();
// });
// fs.writeFile(
//   path.join(dirname, 'text.txt'), '', (error) => {
//     if (error) throw error;
//     stdout.write('File created\n');
//   }
// );
// stdin.on('data', data => {
//   if (data.toString().trim() === 'exit') process.exit();
//   fs.appendFile(
//     path.join(dirname, 'text.txt'), ${data}, (error) => {
//       if (error) throw error;
//       stdout.write('Content added\n');
//     }
//   );
// });
