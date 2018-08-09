<template>
  <div>
    <el-container>
      <el-header height="60px" class="header">
        <label class="header-title">标题测试</label>
        <user-info></user-info>
      </el-header>
      <el-container>
        <el-main style="padding:0;margin:0">
          <div class="layout">
            <div class="layout-left">
              <el-menu
                default-active="2"
                background-color="rgba(0,0,0,0)"
                text-color="rgb(255,255,255)">
                <el-submenu v-for="menu in menuList"
                            :index="menu.id">
                  <template slot="title">
                    <div class="menu-item">
                      <icon style="margin: 0 10px;"
                            :name="menu.icon" :w="20" :h="20"></icon>
                      <span slot="title">{{menu.name}}</span>
                    </div>
                  </template>
                  <el-menu-item-group v-if="menu.children">
                    <el-menu-item v-for="submenu in menu.children"
                      :index="submenu.id">
                      <span slot="title">{{submenu.name}}</span>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </div>
            <div class="layout-right">
              <router-view></router-view>
            </div>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import UserInfo from '@/components/UserInfo.vue';

  @Component({
    components: {
      UserInfo,
    },
  })
  export default class Layout extends Vue {
    private menuList: any[] = [
      {
        id: '1',
        name: '菜单一',
        icon: 'person-info',
        children: [
          {
            id: '1-1',
            name: '菜单1-1',
          }, {
            id: '1-2',
            name: '菜单1-2',
          },
        ],
      }, {
        id: '2',
        name: '菜单二',
        icon: 'group',
      }, {
        id: '3',
        name: '菜单3',
        icon: 'scroe-anlay',
      },
    ];
  }
</script>

<style lang="scss">
  .header {
    height: 60px;
    line-height: 60px;
    text-align: left;
    background:linear-gradient(90deg,rgba(2,162,175,1),rgba(0,123,134,1));
    &-title {
       display: inline-block;
       font-weight: 700;
       font-style: normal;
       font-size: 20px;
       color: #FFFFFF;
       height: 100%;
       width: 300px;
    }
  }
  .layout {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: calc(100vh - 60px);
    width: 100%;
    position: absolute;
    &-left {
       flex-shrink: 0;
       width: 260px;
       height: 100%;
       background-color: #007B86;
      text-align: left;
     }
    &-right {
       background:#EAF5F5;
       flex-grow:1;
       height: 100%;
       display: flex;
       flex-direction: column;
       padding: 0 30px;

    }
  }
  .el-breadcrumb{
    line-height: 60px;
    .el-breadcrumb__item{
      font-size: 14px;
      color: #909090;
    }
  }
  .el-menu{
    border-right: none!important;
  }
  .el-menu-item:hover,.el-submenu__title:hover{
    transition: .5s linear;
    background-color: #02a2af !important;
    color: white;
  }
  .menu-item{
    color: #76eaf5;
  }

</style>
