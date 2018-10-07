import a from '/a.js';
import b from '/b.js';

console.info('a');
console.log(a());

console.info('b');
console.log(b());

var script = document.querySelector('[data-live-server]');
var config = script.textContent.trim().replace(/\'(?:^\')+\'/g, '\"');
console.info(config);

var data = JSON.parse(config || '{}');
console.log(data.test);
