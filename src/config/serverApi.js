const DEV_HOST = '';
const ENV_HOST = 'http://110.1.1.1';

const HOST = process.env === 'production'
  ? ENV_HOST
  : DEV_HOST;

exports.guest = {
  getGoodsCata: `${HOST}/guest/goods_cata`,
  // 首页其它数据
  getHomePageData: `${HOST}/guest/getHomePageData`,
};

exports.goods = {
  getGoods: `${HOST}/goods/get/{id}`,
}
exports.order = {
  createOrder: `${HOST}/order/create`,
  getOrder: `${HOST}/order/get/{id}`,
  cancelOrder: `${HOST}/order/cancel/{id}`,
  // 积分支付订单
  payOrderByPoints: `${HOST}/order/payByPoints/{id}`,
  payOrderOnline: `${HOST}/order/payOnline/{id}`
};
