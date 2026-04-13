const fs = require('fs');
const path = require('path');

// We will use Jimp to resize the image
async function run() {
  try {
    const Jimp = require('jimp');
    
    const logoPath = path.join(__dirname, '..', 'public', 'logo.png');
    console.log('Reading from', logoPath);
    const image = await Jimp.read(logoPath);

    // favicon.ico (usually 48x48 max or 32x32 for simplicity)
    const faviconPath = path.join(__dirname, '..', 'public', 'favicon.ico');
    await image.clone().resize(48, 48).writeAsync(faviconPath);
    console.log('Saved favicon.ico');

    // icon.png (192x192)
    const iconPath = path.join(__dirname, '..', 'public', 'icon.png');
    await image.clone().resize(192, 192).writeAsync(iconPath);
    console.log('Saved icon.png');

    // apple-icon.png (180x180)
    const appleIconPath = path.join(__dirname, '..', 'public', 'apple-icon.png');
    await image.clone().resize(180, 180).writeAsync(appleIconPath);
    console.log('Saved apple-icon.png');

    // icon512.png (512x512)
    const icon512Path = path.join(__dirname, '..', 'public', 'icon512.png');
    await image.clone().resize(512, 512).writeAsync(icon512Path);
    console.log('Saved icon512.png');

  } catch (error) {
    if (error.code === 'MODULE_NOT_FOUND') {
      console.log('Installing jimp first...');
      const { execSync } = require('child_process');
      execSync('npm install jimp@0.22.10 --no-save', { stdio: 'inherit' });
      run(); // restart after installing
    } else {
      console.error(error);
    }
  }
}

run();
