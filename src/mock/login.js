import { param2Obj } from '@/utils';

const userMap = [{
  id: 'admin',
  role: ['Dashboard', 'Table', 'Form', 'SubTable'],
  // avatar: '',
  name: 'admin',
}, {
  id: 'demoUser',
  role: ['Dashboard', 'Table'],
  name: 'demoUser',
}, {
  id: 'demoSubUser',
  role: ['Dashboard', 'SubTable'],
  name: 'demoSubUser',
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
};
