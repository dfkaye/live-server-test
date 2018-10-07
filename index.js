import a from '/a.js';
import b from '/b.js';

console.log(a());
console.log(b());

var script = document.querySelector('[data-live-server]');
var config = script.textContent.trim().replace(/\'(?:^\')+\'/g, '\"');
var data = JSON.parse(config || '{}');

console.info('config');
console.log(data.test);
