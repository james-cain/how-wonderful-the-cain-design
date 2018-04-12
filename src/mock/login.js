const userMap = {
  admin: {
    role: ['Dashboard', 'Table', 'Form'],
    // avatar: '',
    name: 'admin',
  },
  demo: {
    role: ['Dashboard', 'Table'],
    name: 'demoUser',
  },
};

export default {
  loginByUsername: config => {
    const { username } = JSON.parse(config.body);
    return userMap[username];
  },
};
