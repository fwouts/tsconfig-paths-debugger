const tsConfigPaths = require("tsconfig-paths");
const path = require("path");

let filePath = process.argv[2];
if (!filePath) {
  throw new Error(
    `Please specify a path to a directory or tsconfig.json in the first argument.`
  );
}
filePath = path.resolve(filePath);

console.error(`Loading tsconfig.json from directory: ${filePath}`);
const config = tsConfigPaths.loadConfig(filePath);
console.log(`Parsing was successful!`);
console.log(config);
