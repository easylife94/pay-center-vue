<template>
  <el-container>
    <el-header>顶部</el-header>
    <el-main>
      <el-row>
        <el-col :span="6" :offset="12">
          <el-row>
            <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
              <el-form-item>
                <el-alert
                  id="login-alert"
                  :closable="false"
                  v-bind:title="loginForm.alert.msg"
                  v-if="loginForm.alert.show"
                  type="error">
                </el-alert>
              </el-form-item>
              <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" auto-complete="off" placeholder="用户名" ></el-input>
              </el-form-item>
              <el-form-item prop="pass">
                <el-input type="password" v-model="loginForm.pass" autocomplete="off" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import qs from 'qs'

export default {
  name: 'Login',
  data () {
    let validateUserName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }

    return {
      loginForm: {
        username: '',
        pass: '',
        alert: {
          show: false,
          message: ''
        }
      },
      rules: {
        username: [
          { validator: validateUserName, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let params = qs.stringify({
            loginName: this.loginForm.username,
            password: this.loginForm.pass
          })
          this.axios
            .post('/api/access/login', params)
            .then(response => {
              console.log(response)
              let data = response.data
              if (data.code === '000000') {
                console.log(data.data)
                this.loginForm.alert.show = false
                // 跳转
                let redirect = this.$route.query.redirect
                console.log(redirect)
                if (redirect !== undefined || redirect !== '' || redirect != null) {
                  this.$router.push({
                    path: redirect
                  })
                } else {
                  this.$router.push({
                    path: '/'
                  })
                }
              } else {
                this.loginForm.alert = {
                  msg: data.msg,
                  show: true
                }
              }
            })
            .catch(e => {
              console.error(e)
            })
        } else {
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped>

</style>
