<template>
  <div class="login-container">
    <el-form
      class="login-form"
      ref="loginFormRef"
      :model="loginForm"
      :rules="loginRules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!--username-->
      <el-form-item>
        <span class="svg-container">
          <svg-iocn icon="https://res.lgdsunday.club/user.svg"></svg-iocn>
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <!--password-->
      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <lock />
          </el-icon>
        </span>
        <el-input
          placeholder="password"
          name="password"
          :type="passwordType"
          v-model="loginForm.password"
        ></el-input>
        <span class="show-pwd">
          <span class="svg-container" @click="onChangePwdType">
            <el-icon>
              <View />
            </el-icon>
          </span>
        </span>
      </el-form-item>

      <!--  登录按钮    -->
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        @click="handleLogin"
        :loading="loading"
        >登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { Lock, View } from '@element-plus/icons'
import SvgIocn from '@/components/SvgIcon/index.vue'
import { useLogin } from './use/Login'

/*
 *  loginForm 表单
 *  loginRules 表单验证规则
 *  loginFormRef 表单验证
 *  passwordType 密码小眼睛
 *  loading 登录加载状态
 *  handleLogin 处理登录方法
 *  onChangePwdType 处理显示小眼睛方法
 *
 *  */
const {
  loginForm,
  loginRules,
  loginFormRef,
  passwordType,
  loading,
  handleLogin,
  onChangePwdType
} = useLogin()
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;
}

.login-form {
  position: relative;
  width: 520px;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;

  ::v-deep .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }

  ::v-deep .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: none;
      border-radius: 0;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      caret-color: $cursor;
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 3px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }
}
</style>
