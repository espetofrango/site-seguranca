const fs = require('fs');
fetch('https://www.emive.com.br/')
  .then(res => res.text())
  .then(html => {
    const regex = /https?:\/\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/ig;
    const matches = html.match(regex);
    if(matches) {
      const unique = [...new Set(matches)];
      fs.writeFileSync('emive_imgs.txt', unique.join('\n'));
    }
  })
  .catch(console.error);
