import { param2Obj } from '@/utils';

const userMap = [{
  id: 'admin',
  role: ['Dashboard', 'Table', 'Form', 'SubTable', 'Chart', 'MultiForm', 'Desc', 'SuccessMsg', 'FailMsg', 'FormSuccessMsg', 'FormFailMsg', 'Test', 'Menu', 'Edit'],
  // avatar: '',
  name: 'admin',
}, {
  id: 'ChartUser',
  role: ['Dashboard', 'Chart'],
  name: 'ChartUser',
}];

export default {
  loginByUsername: (config) => {
    const { username } = JSON.parse(config.body);
    return userMap[username];
  },
  getUserInfo: (config) => {
    const { id } = param2Obj(config.url);
    let user = {};
    userMap.forEach((item, idx) => {
      if (item.id === id) {
        user = userMap[idx];
        user.code = 0;
      }
    });
    return user.id ? user : false;
  },
  logout: () => {
    const info = {};
    info.code = 0;
    info.message = 'success';
    return info;
  },
};
