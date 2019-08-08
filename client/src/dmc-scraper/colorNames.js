const colors = require('./colors.json');
const namedColors = require('color-name-list');

const named = colors.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
console.log('named:', named);
