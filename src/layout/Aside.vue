<template>
  <a-layout-sider
      :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }"
      width="220">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
      物流管理系统
    </div>
    <a-menu theme="dark" mode="inline">
      <a-sub-menu v-for="(item, index) in menus" :key="index">
        <span slot="title">
          <a-icon :type="item.icon"/>
          <span>{{ item.title }}</span>
        </span>
        <a-menu-item v-for="menu in item.children" :key="menu.title">
          <router-link :to="menu.path">
            {{ menu.title }}
          </router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </a-layout-sider>
</template>

<script>

export default {

  data() {
    return {
      menus: [
        {
          title: 'Navigation One',
          icon: 'setting',
          children: [{title: 'Setting', path: '/home'}]
        },
        {
          title: 'Navigation Two',
          icon: 'diff',
          children: [{title: 'About', path: '/home'}]
        },
        {
          title: 'Navigation Three',
          icon: 'apple',
          children: [{title: 'Follow', path: '/home'}]
        },
      ]
    }
  },

}

</script>

<style scoped>

#components-layout-demo-fixed-sider .logo {
  padding: 10px 15px;
  height: 50px;
  font-size: 15px;
  margin: 16px;
  color: #ffffff;
  letter-spacing: 2px;
}

.ant-menu {
  letter-spacing: 1px;
}

.logo img {
  width: 32px;
  height: 32px;
  margin-right: 5px;
}

</style>