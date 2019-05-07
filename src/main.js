import Vue from 'vue';
import 'babel-polyfill'; // 兼容ie9
import { RadioButton, CheckboxButton, Dropdown, DropdownMenu, DropdownItem, Row, Col, Tabs, TabPane, Input, Menu, Submenu, MenuItem, MenuItemGroup, Select, Option, Button, Table, TableColumn, Pagination, Form, FormItem, CheckboxGroup, Checkbox, RadioGroup, Radio, MessageBox, Loading, Message, Dialog, Tree, InputNumber, Cascader, Breadcrumb, BreadcrumbItem, DatePicker, Switch } from 'element-ui';
import 'normalize.css/normalize.css'; // A modern alternative to CSS resets
import '@/icons'; // icon
import '@/mock';
import '@/permission';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
import './styles/reset.css';
import App from './App';
import router from './router';
import store from './store';

Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);
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
Vue.component(CheckboxButton.name, CheckboxButton);
Vue.component(Checkbox.name, Checkbox);
Vue.component(RadioGroup.name, RadioGroup);
Vue.component(RadioButton.name, RadioButton);
Vue.component(Radio.name, Radio);
Vue.component(Dialog.name, Dialog);
Vue.component(Tree.name, Tree);
Vue.component(InputNumber.name, InputNumber);
Vue.component(Cascader.name, Cascader);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(BreadcrumbItem.name, BreadcrumbItem);
Vue.component(Tabs.name, Tabs);
Vue.component(TabPane.name, TabPane);
Vue.component(DatePicker.name, DatePicker);
Vue.component(Switch.name, Switch);
Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

Sentry.init({
  dsn: 'http://728a1fb96fe34b4da6a646eab4361c6c@localhost:9000/3',
  releases: 'pro@1.0.1',
  integrations: [
    new Integrations.Vue({
      Vue,
      attachProps: true,
    }),
  ],
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
