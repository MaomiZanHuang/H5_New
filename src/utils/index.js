/**
 * 简单字符串模板替换
 * @param {String} url
 * @param {Object} o
 * @return {String}
 * 示例:
 * replaceVars('/api/{id}/{ shop_id }/patch', { id: 1, shop_id: '20111' })
 * => '/api/1/20111/patch'
 */
export function replaceVars (url = '', o = {}) {
  let vars = url.match(/\{\s*[A-z|_]+\s*\}/g) || [];
  for (let key of vars) {
    let k = key.match(/[A-z|_]+/);
    if (k && k.length) {
      k = k[0];
      url = url.replace(key,
        typeof o[k] !== undefined
          ? (typeof o[k] === 'object' ? JSON.stringify(o[k]) : o[k])
          : '');
    }
  }
  return url;
};