import a from '/a.js';
import b from '/b.js';

console.log('imported: ' + a());
console.log('imported: ' + b());

var script = document.querySelector('[data-live-server]');
var config = script.textContent.trim().replace(/\'(?:^\')+\'/g, '\"');
var data = JSON.parse(config || '{}');

console.info('config: ' + data.test);

var s = document.createElement('script');
s.textContent = "console.log('dynamically added inline script');";
script.parentElement.appendChild(s);
