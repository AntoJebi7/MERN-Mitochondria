import path from 'path';
//This imports Node.js's path module.
//It provides utilities for working with file and 
// directory paths.
//We’ll use it to get the directory name later.
import { fileURLToPath } from 'url';
//In ESM, import.meta.url gives you a 
// file URL (e.g. "file:///Users/you/project/utils/path.js").
//We need to convert that file URL into a real 
// file system path.
//This fileURLToPath() function does exactly that.
const __filename = fileURLToPath(import.meta.url);
//import.meta.url gives the URL of the current
//  module (the file this line is in).
//fileURLToPath() turns it into an absolute 
// path on your system.
const __dirname = path.dirname(__filename);
// path.dirname() gets just the directory portion of a path.
export default __dirname;
//This makes the __dirname value (your current folder path)
//  available wherever you import this file