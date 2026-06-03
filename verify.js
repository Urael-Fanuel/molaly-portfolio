const fs = require('fs');
const path = require('path');
const vm = require('vm');

let failed = false;

function logPass(msg) {
  console.log(`[PASS] ${msg}`);
}

function logFail(msg) {
  console.error(`[FAIL] ${msg}`);
  failed = true;
}

console.log('====================================');
console.log('Molaly Portfolio Verification Script');
console.log('====================================\n');

// 1. Check file existence
const filesToCheck = ['index.html', 'style.css', 'app.js', 'CV.pdf'];
for (const file of filesToCheck) {
  if (fs.existsSync(file)) {
    logPass(`File exists: ${file}`);
  } else {
    logFail(`Required file is missing: ${file}`);
  }
}

if (failed) {
  console.error('\nStopping checks due to missing files.');
  process.exit(1);
}

// 2. Read contents
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');
const js = fs.readFileSync('app.js', 'utf8');

// 3. Verify index.html references style.css and app.js
if (html.includes('href="style.css"') || html.includes("href='style.css'")) {
  logPass('index.html correctly references style.css');
} else {
  logFail('index.html is missing stylesheet reference to style.css');
}

if (html.includes('src="app.js"') || html.includes("src='app.js'")) {
  logPass('index.html correctly references app.js');
} else {
  logFail('index.html is missing script reference to app.js');
}

// 4. Verify JavaScript Syntax
try {
  // Try to compile app.js code as a script using vm module (without running it)
  new vm.Script(js);
  logPass('app.js has 100% valid JavaScript syntax');
} catch (e) {
  logFail(`Syntax error in app.js:\n${e.stack}`);
}

// 5. Verify Critical Configuration Parameters (CLAUDE.md checks)
if (js.includes('molaly2026')) {
  logPass('Password parameter "molaly2026" is preserved in app.js');
} else {
  logFail('Password parameter "molaly2026" was not found in app.js');
}

if (js.includes('pfv4')) {
  logPass('LocalStorage key name "pfv4" is preserved in app.js');
} else {
  logFail('LocalStorage key name "pfv4" was not found in app.js');
}

if (html.includes('CV.pdf') || js.includes('CV.pdf')) {
  logPass('CV.pdf is correctly referenced in the code');
} else {
  logFail('CV.pdf is not referenced in index.html or app.js');
}

if (js.includes('moti.marva@gmail.com') || html.includes('moti.marva@gmail.com')) {
  logPass('Owner email (moti.marva@gmail.com) is preserved');
} else {
  logFail('Owner email (moti.marva@gmail.com) was not found');
}

console.log('\n====================================');
if (failed) {
  console.error('VERIFICATION FAILED! Please fix the errors listed above before pushing.');
  process.exit(1);
} else {
  console.log('VERIFICATION SUCCESSFUL! Portfolio is safe to build and deploy.');
  process.exit(0);
}
