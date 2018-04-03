import Vue from 'vue';
import { Input, Menu, Submenu, MenuItem, MenuItemGroup, Select, Option, Button, Table, TableColumn, Pagination, Form, FormItem, CheckboxGroup, Checkbox, RadioGroup, Radio, MessageBox, Loading, Message, Dialog, Tree, InputNumber, Cascader } from 'element-ui';
import App from './App';
import router from './router';

Vue.component(Input.name, Input);
Vue.component(Button.name, Button);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItem.name, MenuItem);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(Select.name, Select);
Vue.component(Option.name, Option);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);
Vue.component(CheckboxGroup.name, CheckboxGroup);
Vue.component(Checkbox.name, Checkbox);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(Radio.name, Radio);
Vue.component(Dialog.name, Dialog);
Vue.component(Tree.name, Tree);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Cascader.name, Cascader);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
