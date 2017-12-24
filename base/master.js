const fs = require('fs');
const child_process = require('child_process');

for (let i = 0 ; i <3; i++) {
  const worker_process = child_process.exec('node support.js ' + i, (error, stdout, stderr) => {
    if (error) {
      console.log(error.stack);
      console.log('Error code: '+error.code);
      console.log('Signal received: '+error.signal);
   }

   console.log('stdout: ', stdout,  '    ________END______');
   console.log('stderr: ', stderr, '    ________END______');
  });

  worker_process.on('exit', (code) => {
    console.log('子进程已退出，退出码', code);
  });
}