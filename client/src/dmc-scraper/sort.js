const colors = require('./old_colors.json');
const Color = require('color');
const colorString = require('color-string');
const convert = require('color-convert');
const fs = require('fs');

const sortArray = () => {
  let colorArray = [];

  colors.map(color => {
    const { code, name, hex } = color;

    const hsl = convert.hex.hsl(hex);

    colorArray.push({
      code: code,
      name: name,
      hex: hex,
      hsl: hsl
    });
  });

  // console.log(colorArray);
  let data = JSON.stringify(colorArray);
  // console.log('data:', data);
  fs.writeFileSync('colors-sorted.json', data);
};

sortArray();
