const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace images
  content = content.replace(/\/styles\/[^/]+\/public\//g, '/');
  
  // Replace texts
  content = content.replace(/McCarthy/g, 'Scollo Construction');
  content = content.replace(/McCARTHY/g, 'SCOLLO CONSTRUCTION');
  content = content.replace(/mccarthy-footer/g, 'scollo-footer');
  content = content.replace(/mccarthy-header/g, 'scollo-header');
  
  fs.writeFileSync(filePath, content, 'utf8');
}

function walk(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules')) walk(fullPath);
    } else {
      if (fullPath.endsWith('.jsx') || fullPath.endsWith('.html') || fullPath.endsWith('.css')) {
        replaceInFile(fullPath);
      }
    }
  });
}

walk(path.join(__dirname, 'src'));
replaceInFile(path.join(__dirname, 'index.html'));

console.log("Done");
