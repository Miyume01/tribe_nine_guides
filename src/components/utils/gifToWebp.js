import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// Get the current directory path (ES module workaround)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the input and output directories
const inputDir = path.join(__dirname, '../enemies/enemies_gifs');
const outputDir = path.join(__dirname, '../enemies/enemies_gifs/webp');

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Read all files from the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter out only GIF files
  const gifFiles = files.filter((file) => path.extname(file).toLowerCase() === '.gif');

  // Process each GIF file
  gifFiles.forEach((gifFile) => {
    const inputFilePath = path.join(inputDir, gifFile);
    const outputFilePath = path.join(outputDir, path.basename(gifFile, '.gif') + '.webp');

    // Convert GIF to WebP using Sharp
    sharp(inputFilePath, { animated: true })
      .webp({ mixed: true }) // Use lossless WebP compression
      .toFile(outputFilePath, (err, info) => {
        if (err) {
          console.error(`Error converting ${gifFile} to WebP:`, err);
        } else {
          console.log(`Successfully converted ${gifFile} to WebP:`, info);
        }
      });
  });
});