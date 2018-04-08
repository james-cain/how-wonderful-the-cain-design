import Vue from 'vue';

const eventBus = new Vue({
  data: {
    permission: '', // 权限控制全局值
  },
  methods: {
    update(target, val) {
      this[target] = val;
    },
  },
});

export default eventBus;
