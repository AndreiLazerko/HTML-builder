const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'files');
const folderPathCopy = path.join(__dirname, 'files-copy');


function copyDir(folder, folderCopy) {
  fs.readdir(folder, (error, files) => {
    for(const file of files) {
      fs.readFile(path.join(folder, file), 'utf-8', (error, data) => {
        
        fs.mkdir(folderCopy, {recursive:true}, () => {
          fs.writeFile(path.join(folderCopy, file), data, (error) => {
            if (error) {
              throw error;
            }
          });
        });
      });
    }
  });
}

copyDir(folderPath, folderPathCopy);