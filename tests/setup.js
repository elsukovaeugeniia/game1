// Полифилл для TextEncoder/TextDecoder (для старых версий Node.js)
if (typeof TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('text-encoding');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

const { JSDOM } = require('jsdom');

if (typeof document === 'undefined') {
  const jsdom = new JSDOM();
  global.document = jsdom.window.document;
  global.window = jsdom.window;
  global.navigator = {
    userAgent: 'node.js'
  };
}