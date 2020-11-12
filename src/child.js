console.log("Hello from child.js!");

const root = __dirname.split('node_modules')[0];
const exePath = `${root}src\\assets\\services\\weather\\WeatherApi.exe`;

const spawnObj = require('child_process').spawn;
var progToOpen = spawnObj(exePath);

