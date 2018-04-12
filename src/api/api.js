import Server from './server';

/* eslint class-methods-use-this: 0 */
class API extends Server {
  /**
     * 获取用户信息
     *
     */
  async getInfo(params) {
    try {
      const result = await this.axios('get', '/user/info', params);
      if (result && result.code === 0) {
        return result;
      }
      const err = {
        tip: '获取用户信息失败',
        response: result,
        data: params,
        url: '/user/info',
      };
      throw err;
    } catch (err) {
      throw err;
    }
  }
}

export default new API();
