console.log("Hello from child.js!");

console.log("child js finds itself running from " + __dirname);

// import { spawn as spawnObj } from 'child_process';
const spawnObj = require('child_process').spawn;

// var exePath = "~/assets/services/weather/WeatherApi.exe";

var exePath = "C:\\Users\\Jim.Moore\\source\\reallyJim\\angular-electron\\src\\assets\\services\\weather\\weatherapi.exe";
var progToOpen = spawnObj(exePath);

