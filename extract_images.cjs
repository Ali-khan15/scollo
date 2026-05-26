const https = require('https');

https.get('https://www.mccarthy.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    // extract img src
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let match;
    const images = new Set();
    while ((match = imgRegex.exec(data)) !== null) {
      images.add(match[1]);
    }
    
    // extract background image styles
    const bgRegex = /background-image:\s*url\((['"]?)(.*?)\1\)/gi;
    while ((match = bgRegex.exec(data)) !== null) {
      images.add(match[2]);
    }
    
    console.log(Array.from(images).filter(i => i.includes('styles') || i.includes('.jpg') || i.includes('.png')).slice(0, 30));
  });
}).on('error', (err) => {
  console.log("Error: " + err.message);
});
