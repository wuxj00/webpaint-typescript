<template>
  <div class="login">
    <div class="login-msg">消息</div>
    <div class="login-usr">
      {{username}}
      <i class="login-usr-list" v-on:click="() => showList = !showList"></i>
      <transition name="el-zoom-in-top">
        <div class="login-list" v-show="showList"
             v-on:mouseleave="showList=false">
          <i class="icon-tri"></i>
          <div class="login-list-person">个人中心</div>
          <div class="login-list-pwd">修改密码</div>
          <div class="login-list-out">退出登录</div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    components: {
    },
  })
  export default class Layout extends Vue {
    private userinfo: any = {
      username: 'jack',
    };
    private showList = false;

    get username(): string {
      let name = '未登录';
      if (this.userinfo !== null) {
        name = this.userinfo.username;
      }
      return name;
    }
  }
</script>

<style lang="scss" scoped>
  .login {
    position: absolute;
    top: 0;
    right: 30px;
    display: inline-block;
    font-size: 16px;
    color: #71EAF6;
    &-msg {
      background: url(../assets/images/login/nav_msg.png) left center no-repeat;
      display: inline-block;
      padding-left: 30px;
    }
    &-usr {
      background: url(../assets/images/login/nav_person.png) left center no-repeat;
      display: inline-block;
      padding-left: 30px;
      margin-left: 40px;
      &-list {
        width: 15px;
        height: 15px;
        background: url(../assets/images/login/arrow_down.png) center center no-repeat;
        display: inline-block;
        margin-left: 10px;
        cursor: pointer;
        &:hover{
          transform: scale(1.5);
        }
      }
    }
    &-list{
      padding: 25px 0;
      display: inline-block;
      position: absolute;
      z-index: 10;
      top:75px;
      right: 0;
      transform: translateX(20px);
      background:rgba(196,241,244,1);
      border-radius: 6px;
      box-sizing: border-box;
      width: 130px;
      margin:0;
      color: #007B87;
      font-size: 14px;
      &>div{
        padding: 0 15px 0 45px;
        height: 40px;
        line-height: 40px;
        transition:background-color .5s ease-out;
      }
      &>div:hover{
        background-color: #A2E6EB;
      }
      &-person {
        cursor: pointer;
        background: url(../assets/images/login/xiala_user.png) no-repeat 20px center;
      }
      &-pwd {
        cursor: pointer;
        background: url(../assets/images/login/xiala_lock.png) no-repeat 20px center;
      }
      &-out {
        cursor: pointer;
        background: url(../assets/images/login/xiala_out.png) no-repeat 20px center;
      }
    }
  }
  .icon-tri {
    display:inline-block;
    position: absolute;
    border-style: solid;
    border-width: 0 10px 10px 10px;
    border-color: transparent transparent #C4F1F4 transparent;
    width: 0;
    height: 0;
    transform: translate(90px,-35px);
  }
</style>
