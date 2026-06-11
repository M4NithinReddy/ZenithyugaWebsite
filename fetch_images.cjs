const fs = require('fs');
const https = require('https');
const http = require('http');

const urls = [
  'https://www.chalyati.com/',
  'https://vyoma3d-marketing-we-h1cb.bolt.host/',
  'https://arifphotography.in/',
  'https://webcros.vercel.app/',
  'https://deluxe-gumption-e4e2c7.netlify.app/',
  'https://ahrslive.netlify.app/',
  'https://mall-chat.netlify.app',
  'https://agent-magicui.vercel.app/',
  'https://www.projectbazaar.in',
  'https://ipageums.netlify.app/',
  'https://incruiter.com/',
  'https://earnest-daffodil-82be35.netlify.app/',
  'https://www.dronetv.in',
  'https://www.dronesimulator.pro',
  'https://www.ipageums.com',
  'https://www.ipagevision.com',
  'https://www.indiadroneacademy.com',
  'https://vallinathandco.com/about',
  'https://www.rentamigo.in/',
  'https://1xl.com/',
  'https://bestiu.edu.in/',
  'https://www.adhyayan25.com/',
  'https://indiadaas.com/user-portal',
  'https://funny-melomakarona-b84b25.netlify.app/',
  'https://pickle-demo.vercel.app/',
  'https://arifs-photography.vercel.app/'
];

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
         return resolve(fetchHTML(res.headers.location.startsWith('http') ? res.headers.location : new URL(res.headers.location, url).href));
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
    req.setTimeout(5000, () => { req.destroy(); resolve(''); });
  });
}

async function run() {
  const mapping = {};
  for (const url of urls) {
    try {
      const html = await fetchHTML(url);
      const match = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i) || 
                    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
      
      if (match && match[1]) {
        let imgUrl = match[1];
        if (imgUrl.startsWith('/')) {
            imgUrl = new URL(imgUrl, url).href;
        }
        mapping[url] = imgUrl;
        console.log(`[OK] ${url} -> ${imgUrl}`);
      } else {
        console.log(`[NONE] ${url}`);
      }
    } catch (e) {
      console.log(`[ERR] ${url}`);
    }
  }
  fs.writeFileSync('og_images.json', JSON.stringify(mapping, null, 2));
}

run();
