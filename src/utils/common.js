function setStorage(obj) {
  // if (typeof obj.data === 'object') {
  // console.log(obj.key + '缓存对象：', obj)
  localStorage.setItem(obj.key, JSON.stringify(obj.data));
  // } else {
  // localStorage.setItem(obj.key, obj.data)
  // }
}

function getStorage(obj) {
  const data = JSON.parse(localStorage.getItem(obj.key));
  // console.log(obj.key + '取出缓存对象：', JSON.parse(localStorage.getItem(obj.key)))
  return data;
}

function msgTip(data, compareObj, tip) {
  if (data === compareObj) {
    this.$message.error({
      message: tip,
    });
    return true;
  }
  return false;
}

// 按钮权限控制
function hasPermissions(permission) {
  return this.bus.$data.permission.indexOf(permission) > -1;
}

export {
  setStorage,
  getStorage,
  msgTip,
  hasPermissions,
};
