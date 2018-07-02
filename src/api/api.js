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

  async logout() {
    try {
      const result = await this.axios('post', '/login/logout');
      if (result && result.code === 0) {
        return result;
      }
      const err = {
        tip: '登出失败',
        response: result,
        data: {},
        url: '/login/logout',
      };
      throw err;
    } catch (err) {
      throw err;
    }
  }

  // 文件上传
  async upload(formData) {
    try {
      const result = await this.axios('post', '/cloudfs/api/fs/upload', formData);
      if (result.state === 'SUCCESS') {
        return result;
      }
      const err = {
        tip: '文件上传失败',
        response: result,
        data: {
          formData,
        },
        url: '/cloudfs/api/fs/upload',
      };
      throw err;
    } catch (err) {
      throw err;
    }
  }
}

export default new API();
