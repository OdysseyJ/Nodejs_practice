const axios = require("axios"); // ajax 라이브러리
const cheerio = require("cheerio"); // html파싱

const crawler = async () => {
  await Promise.all(
    records.map(async r => {
      const response = await axios.get(r.링크);
      if (response.status === 200) {
        const html = response.data;
        console.slog(html);
      }
    })
  );
};
