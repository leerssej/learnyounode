let nodePath, scriptPath, rest;
[nodePath, scriptPath, ...rest] = process.argv;
console.log(rest.map(Number).reduce((sum, num) => sum + num));