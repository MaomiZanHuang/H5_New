const DEV_HOST = '';
const ENV_HOST = 'http://110.1.1.1';

const HOST = process.env === 'production'
  ? ENV_HOST
  : DEV_HOST;

exports.guest = {
    // 为了减少请求，合并数据
    getHomePageData: `${HOST}/guest/getHomePageData`
};