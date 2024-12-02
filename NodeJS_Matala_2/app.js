const fs = require('fs'); // Import Node.js core module for file operations
const path = require('path'); // Import Node.js core module for working with paths

// Path to the directory containing text files
const dirPath = path.join(__dirname, 'text');
console.log("Directory path is: ",dirPath);

// Array of filenames for input files
const inputFiles = Array.from({ length: 10 }, (_, i) => `file_text_${i + 1}.txt`);
console.log("Array filenames: ", inputFiles);

// Filename for the result file
const kovetsFile = path.join(dirPath, 'kovetsFile.txt');

// Clear or create the result file before appending data
fs.writeFileSync(kovetsFile, '');

// Process each file and append content to the result file
for (let i = 0; i < inputFiles.length; i++) {
    const filePath = path.join(dirPath, inputFiles[i]);

    // Read the content of the current file
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.split(/\r?\n/); // Split into lines, supporting both Windows and Unix formats

    // Determine the number of lines to copy
    const linesToCopy = lines.slice(0, i + 1);

    // Append the selected lines to the result file
    fs.appendFileSync(kovetsFile, linesToCopy.join('\n') + '\n');
}

console.log('File processing completed successfully!');
