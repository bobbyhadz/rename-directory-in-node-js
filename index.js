// EXAMPLE 1 - How to rename a directory in Node.js

import fs from 'fs/promises';

// 👇️ If you use CommonJS require()
// const fs = require('fs/promises'):

async function renameDirectory(oldName, newName) {
  try {
    await fs.rename(oldName, newName);
  } catch (err) {
    console.log(err);
  }
}

const oldName = './old-dir-name';
const newName = './new-dir-name';

renameDirectory(oldName, newName).then(() => {
  console.log('directory renamed successfully');
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Rename a directory in Node.js using `fs.renameSync()`

// import fs from 'fs';

// // 👇️ If you use the CommonJS require() syntax
// // const fs = require('fs')

// function renameDirectory(oldName, newName) {
//   try {
//     fs.renameSync(oldName, newName);
//   } catch (err) {
//     console.log(err);
//   }
// }

// const oldName = './old-dir-name';
// const newName = './new-dir-name';

// renameDirectory(oldName, newName);

// console.log('Directory has been renamed successfully');

// ------------------------------------------------------------------

// // EXAMPLE 3 - Rename a directory in Node.js using callbacks with `fs.rename()`

// import fs from 'fs';

// // 👇️ If you use the CommonJS require() syntax
// // const fs = require('fs')

// function renameDirectory(oldName, newName) {
//   fs.rename(oldName, newName, error => {
//     if (error) {
//       throw new Error(error);
//     }
//   });
// }

// const oldName = './old-dir-name';
// const newName = './new-dir-name';

// renameDirectory(oldName, newName);

// console.log('Directory has been renamed successfully');
