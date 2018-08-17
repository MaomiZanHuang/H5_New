const DEV_HOST = '';
const ENV_HOST = 'http://116.85.57.185/api';

const HOST = process.env.NODE_ENV === 'production'
  ? ENV_HOST
  : DEV_HOST;

exports.guest = {
  getGoodsCata: `${HOST}/guest/goods_cata`,
  // 首页其它数据
  getHomePageData: `${HOST}/guest/getHomePageData`,
  getOrderByVisitor: `${HOST}/guest/getOrder`,
  // 获取说说
  getShuoshuo: `${HOST}/guest/getShuoshuo`,
  getChargeOptions: `${HOST}/guest/charge_options`
};

exports.user = {
  login: `${HOST}/user/login`,
  reg: `${HOST}/user/reg`,
  feedback: `${HOST}/user/feedback`,
  getUserInfo: `${HOST}/user/info`,
  updateUserInfo: `${HOST}/user/update_info`,
  updateLoginPwd: `${HOST}/user/update_loginpwd`,
  updatePayPwd: `${HOST}/user/update_paypwd`,
  checkin: `${HOST}/user/checkin`,
  chargeByCard: `${HOST}/user/chargeByCard`,
  getUserPoints: `${HOST}/user/points`,
  getUserBill: `${HOST}/user/bill`
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
  payOrderOnline: `${HOST}/order/payOnline/{id}`,
  // 分页获取用户订单信息
  getUserOrders: `${HOST}/order/user_order`
};

exports.pay = {
  getCardOrder: `${HOST}/pay/getCardOrder`,
  queryCardOrder: `${HOST}/pay/card_pay/{id}`,
  // 发起充值请求
  create: `${HOST}/pay/create`,
  queryAppOrder: `${HOST}/pay/app_pay/{id}`
}