import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cssFile = path.join(__dirname, 'dist/assets/index.css');
let cssContent = fs.readFileSync(cssFile, 'utf8');
cssContent = cssContent.replace(/..\/..\/fonts\//g, './');
cssContent = cssContent.replace(/..\/..\/img\//g, './');
fs.writeFileSync(cssFile, cssContent, 'utf8');
