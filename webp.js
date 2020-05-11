const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

function convertImages(path) {
  imagemin([path], {
    destination: path,
    plugins: [
      imageminWebp({
        quality: 60
      })
    ]
  }).then(() => {
    console.log('Images optimized');
  });
}

const { readdirSync } = require('fs');
const sourceDir = './src/assets'

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

getDirectories(sourceDir).forEach(subDir => {
  convertImages(sourceDir);

  // Get subdirectories
  getDirectories(sourceDir + '/' + subDir).forEach(subSubDir => {
    convertImages(sourceDir + '/' + subDir + '/' + subSubDir);
  })
})
