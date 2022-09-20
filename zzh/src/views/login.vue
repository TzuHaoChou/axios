
<template>
  <div>
    <div id="app">
      <div class="chender">
        <h2>梦学谷会员管理系统</h2>
        <el-form
          :model="form"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { login } from "../api/index";
export default {
  name: "",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入活密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 登录
    submitForm() {
      login(this.form).then((res) => {
      console.log(res);
      this.$router.push('/')
    });
    },
  },
};
</script>
<style scoped lang='scss'>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(http://vue.mengxuegu.com/img/login.b665435f.jpg);
}
.chender {
  margin: 0 auto;
  width: 500px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.752);
  border-radius: 15px;
  margin-top: 15%;
  text-align: center;
  padding: 30px 40px;
}
.demo-ruleForm {
  margin: 0 auto;
}
h2 {
  margin: 20px;
}
</style>
