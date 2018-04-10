import Server from './server';

/* eslint class-methods-use-this: 0 */
class API extends Server {
  /**
     * 获取用户信息
     *
     */
  async getInfo() {
    return ['Dashboard', 'Table', 'Form'];
    // try {
    //     let result = await this.axios('get', '/api/xxx', params);
    //     if (result && result.code === 0) {
    //         return result.data;
    //     } else {
    //         let err = {
    //             tip: '获取用户信息失败',
    //             response: result,
    //             data: params,
    //             url: '/api/xxx'
    //         }
    //         throw err;
    //     }
    // } catch (err) {
    //     throw err;
    // }
  }
}

export default new API();
