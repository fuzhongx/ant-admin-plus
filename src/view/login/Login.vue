<template>
  <div class="contair">
    <div class="box">
      <el-form
        ref="ruleFormRef"
        style="max-width: 400px"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item>
          <h2 class="Login-title">你好，请登录</h2>
        </el-form-item>
        <el-form-item prop="pass">
          <svg-icon iconName="user" class="user_icon"></svg-icon>
          <el-input
            v-model="ruleForm.pass"
            type="text"
            autocomplete="off"
            class="login_user"
          />
        </el-form-item>
        <el-form-item prop="checkPass" class="login_psd">
          <svg-icon iconName="psd" class="psd_icon"></svg-icon>
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="age">
          <el-input v-model.number="ruleForm.age" />
        </el-form-item>
        <el-form-item>
          <div class="unpaw">
            <span>记住密码</span>
            <span>忘记密码</span>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm(ruleFormRef)"
            class="btnSubmit"
          >
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { userLogin, deviceList } from '@/api/account.js'
import {  deviceListCom } from '@/api/device.js'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router';

const ruleFormRef = ref()
const router = useRouter()
const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
  tokenKey: ''
})
const checkAge = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('Please input the 验证码'))
  }
}
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the username'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password '))
  } else {
    callback()
  }
}
const rules = reactive({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})
const submitForm = () => {
  userLogin({
    userName: ruleForm.pass,
    passWord: ruleForm.checkPass
  }).then(res => {
    console.log(res)
    ruleForm.tokenKey = res.data.token
    localStorage.setItem('token', res.data.token)
    console.log(res.data.code);
    if (res.data.code == 200) {
      router.push('/index')
    }
  })
  deviceListCom({
      deviceName:ruleForm.pass,
      pageNum:'1',
      pageSize:'10'
    }).then(res => {
        console.log(res, '设备管理')
      })
  deviceList({
    token: ruleForm.tokenKey
  }).then(res => {
    console.log(res, 'dev')
  })
}
</script>

<style lang="scss" scoped>
.el-button--primary {
  background-color: #009688 !important;
  border-color: #009688 !important;
}

.contair {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/image/bgs.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  width: 470px;
  height: 386px;
  border-radius: 20px;
  background-color: hsla(0, 0%, 100%, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
}

.demo-ruleForm {
  width: 360px;
  height: 360px; 
}

.Login-title {
  margin: 0 auto;
  color: #c2bdbd;
}

.login_user {
  position: relative;
}

.user_icon {
  position: absolute;
  left: 12px;
  z-index: 33;
  color: #aaa8a8;
  font-size: 12px;
}

.login_psd {
  position: relative;
}

.psd_icon {
  position: absolute;
  left: 10px;
  z-index: 33;
  font-size: 16px;
}

::v-deep .el-input__inner {
  height: 44px !important;
  padding-left: 20px;
}

.unpaw {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #aaa8a8;
}

.btnSubmit {
  height: 44px;
  width: 100%;
}
</style>
