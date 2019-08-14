const colors = require('./old_colors.json');
const Color = require('color');
const colorString = require('color-string');
const fs = require('fs');

const res = colorString.get(`#${colors[1].hex}`);

const sortArray = () => {
  let colorArray = [];

  colors.map(color => {
    const { code, name, hex } = color;

    const hsl = colorString.get(`#${color.hex}`);

    colorArray.push({
      code: code,
      name: name,
      hex: hex,
      hsl: hsl.value
    });
  });

  // console.log(colorArray);
  let data = JSON.stringify(colorArray);
  // console.log('data:', data);
  fs.writeFileSync('colors-sorted.json', data);
};

sortArray();
