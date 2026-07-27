# JS Pixshrink CLI

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js: >=14.0.0](https://img.shields.io/badge/Node.js->=14.0.0-green.svg)](https://nodejs.org/)
[![CI](https://github.com/webkolog/js-pixshrink-cli/actions/workflows/node.js.yml/badge.svg)](https://github.com/webkolog/js-pixshrink-cli/actions)

**Version:** 1.0.0

**Created Date:** 2026-07-27

**Last Updated:** 2026-07-27

**Compatibility:** Node.js v14.0.0 or higher

**Created By:** Ali Candan ([@webkolog](https://github.com/webkolog))

**Website:** [http://webkolog.net](http://webkolog.net)

**Copyright:** (c) 2026 Ali Candan

**License:** MIT License ([http://mit-license.org](http://mit-license.org))

---

**JS Pixshrink CLI** is a highly efficient, Node.js-powered Command Line Interface tool designed to eliminate the hassle of manually compressing and converting images for the modern web. It automatically scans a targeted folder, batch-processes `JPG`, `JPEG`, and `PNG` files, and compresses them into high-performance **WebP** images inside an auto-generated `optimized` folder.

## Features

- 🚀 **Blazing Fast Performance:** Powered by the industry-standard `sharp` library for lightning-quick image manipulation.
- 🎨 **Beautiful Terminal UI:** Styled with `chalk` to provide clear, color-coded status updates directly in your command line.
- 🛠️ **Configurable Compression:** Control the output with the `--quality` flag (range 1-100).
- 🌍 **Global Execution:** Seamlessly link the tool via `npm link` to execute the `pixshrink` command anywhere on your system.

## Installation

To set up this CLI tool locally, clone the repository or create your project directory, then install the necessary dependencies:

```bash
mkdir js-pixshrink-cli && cd js-pixshrink-cli
npm init -y
npm install sharp commander chalk globby

```

Ensure your `package.json` includes the `bin` mapping to enable global terminal commands:

```json
"bin": {
  "pixshrink": "./index.js"
}

```

Then, link the package globally to your system:

```bash
npm link

```

## Usage

### Direct Command Interface

Once linked globally, you can invoke the program by providing a target directory path:

```bash
pixshrink <directory_path> [options]

```

### Options

`-q, --quality <number>:` Set target image quality (1-100, default is `80`).
`-h, --help:` Display the help menu and structural info.

---

## Example Usages

### Standard Batch Optimization

Converts all matching images in the target directory using the default 80% compression rate:

```bash
pixshrink ./images

```

### High-Compression Output

Drastically reduces file sizes by targeting a lower quality index (e.g., 60% quality):

```bash
pixshrink ./assets --quality 60

```

### Maximum Quality Retention

Retains crisp details for high-fidelity needs by applying a 95% quality threshold:

```bash
pixshrink ./gallery -q 95

```

### Absolute Path Optimization

Target specific drives or systemic file structures securely by utilizing absolute path strings:

```bash
pixshrink "C:/Users/webkolog/Desktop/raw_assets"

```

---

## Dependencies

This tool leverages several modern open-source npm modules:

* **[Commander.js](https://www.npmjs.com/package/commander):** For structured, robust command-line argument and option parsing.
* **[Sharp](https://www.npmjs.com/package/sharp):** Node.js high-speed image processing engine.
* **[Chalk](https://www.npmjs.com/package/chalk):** Terminal string styling done right.
* **[Globby](https://www.npmjs.com/package/globby):** User-friendly file globbing utilizing standard patterns.

## Why Choose WebP?

Modern web optimization standards heavily prioritize next-generation image formats like **WebP**. Compared to traditional formats like `JPEG` and `PNG`, WebP delivers **25-35% smaller file sizes** at equivalent visual quality. Integrating **JS Pixshrink CLI** into your workflow automates asset optimization, accelerating Largest Contentful Paint (LCP) times and reducing bandwidth strain.

## Contributing

Contributions are welcome! If you find any bugs, encounter pathing edge cases, or have suggestions for new features, feel free to open an issue or submit a pull request on the official GitHub repository.

## Support

For questions, troubleshooting, or general support regarding JS Pixshrink CLI, please visit the project's GitHub issues tab or reach out directly via the author's official website.

## License

This project is open-source software licensed under the [MIT license](https://mit-license.org/).

```text
MIT License

Copyright (c) 2026 Ali Candan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
