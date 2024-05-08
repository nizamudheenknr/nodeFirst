const fs = require('fs');

fs.unlink('example.txt', (err) => {
  if (err) {
    console.error('Error')
  }
  console.log('delete success.');
});