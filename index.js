#!/usr/bin/env node

import { program } from 'commander';
import sharp from 'sharp';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs';

program
  .name('pixshrink')
  .description('A CLI tool to optimize and convert images to WebP format')
  .version('1.0.0')
  .argument('<dir>', 'Directory containing the images to be processed')
  .option('-q, --quality <number>', 'Image quality threshold (1-100)', '80')
  .action(async (dir, options) => {
    try {
      const targetDir = path.resolve(dir);

      if (!fs.existsSync(targetDir)) {
        console.error(chalk.red(`Error: Directory does not exist: ${targetDir}`));
        process.exit(1);
      }

      const allFiles = await fs.promises.readdir(targetDir);
      const allowedExtensions = ['.jpg', '.jpeg', '.png'];
      const imageFiles = allFiles.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return allowedExtensions.includes(ext);
      });

      if (imageFiles.length === 0) {
        console.log(chalk.yellow('No matching images found. Please verify the directory path.'));
        return;
      }

      const outputDir = path.join(targetDir, 'optimized');
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      console.log(chalk.blue(`Processing ${imageFiles.length} image(s)...\n`));

      for (const file of imageFiles) {
        const filePath = path.join(targetDir, file);
        const fileName = path.parse(file).name;
        const targetPath = path.join(outputDir, `${fileName}.webp`);

        await sharp(filePath)
          .webp({ quality: parseInt(options.quality) })
          .toFile(targetPath);

        console.log(`${chalk.green('✔')} ${fileName} -> ${chalk.cyan('optimized/' + fileName + '.webp')}`);
      }

      console.log(chalk.bold.magenta('\nOptimization complete! 🎉'));
    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);
