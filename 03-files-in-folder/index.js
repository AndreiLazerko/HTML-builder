// import { readdir, stat } from 'fs';
 
// if (process.argv.length <= 2) {
//     console.log("Usage: " + __filename + " path/to/directory");
//     process.exit(-1);
// }
 
// var path = process.argv[2];
 
// readdir(path, function(err, items) {
//     for (var i=0; i<items.length; i++) {
//         var file = path + '/' + items[i];
//         console.log("Start: " + file);
 
//         stat(file, function(err, stats) {
//             console.log(file);
//             console.log(stats["size"]);
//         });
//     }
// });

const fs = require('fs');
const path = require('path');

async function readFolder(pathToFolder) {
  const files = await fs.promises.readdir(pathToFolder, {withFileTypes: true});
  for (const file of files) {
    if (file.isFile()) {
      let fileInfo = `${file.name.split('.').join('.')}`;
      fs.stat(path.join(pathToFolder, `${file.name}`), (err, stats) => { console.log(`${fileInfo} - ${stats.size}Byte`); });      
    }
  }
}
readFolder(path.join(__dirname, 'secret-folder'));