const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const colors = [];

async function getHMTL(page) {
  const { data: html } = await axios.get(`http://www.camelia.sk/dmc_${page}.htm`);
  return html;
}

async function getData(page) {
  const html = await getHMTL(page);
  const $ = cheerio.load(html);

  const rows = $('tr', 'table[cellspacing="1"]');

  const getInfo = i => {
    $(rows).each(function() {
      const code = $(this)
        .find('[nowrap]')
        .prev()
        .eq(i)
        .text();

      const name = $(this)
        .find('[nowrap]')
        .eq(i)
        .text()
        .replace(/  /g, '')
        .replace(/\n/g, '')
        .replace(/ - /, '-');

      const hex = $(this)
        .find('[bgcolor]')
        .eq(i)
        .attr('bgcolor');

      console.log('hex:', hex);
      colors.push({ code, name, hex });
    });
  };

  getInfo(0);
  getInfo(1);
  console.log(colors);

  const object = JSON.stringify(colors);

  fs.writeFile(`colors${page}.json`, object, err => {
    if (err) throw err;

    console.log('Done!');
  });
}

// note: I ran the function six times for six pages and just manually copies the files into one master page...I could have made it write to one file initially, but I was having issues with file write...for the purposes of my project, the manual copy + paste was fine :)
getData(6);
// getData(2);
// getData(3);
// getData(4);
// getData(5);
// getData(6);
