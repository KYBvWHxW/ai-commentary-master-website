// This file is for Replit detection only
// The actual Next.js app is in the app/ directory

console.log('🚀 Starting AI解说大师 Next.js Application...');
console.log('📦 Installing dependencies...');

const { exec } = require('child_process');

// Run npm install and then start the dev server
exec('npm install && npm run dev', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error}`);
    return;
  }
  console.log(stdout);
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
});