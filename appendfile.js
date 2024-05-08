const fs = require('fs');


fs.appendFile('example.txt'," additionalContent", 'utf8', (err) => {
  if (err) {
    console.error('Error');
    return;
  }
  console.log('success');
});

