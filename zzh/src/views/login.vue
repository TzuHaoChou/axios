
<template>
  <div>
    <div id="app">
      <div class="chender">
        <h2>梦学谷会员管理系统</h2>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="活动名称" prop="username">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="password">
            <el-input v-model="ruleForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">立即创建</el-button>
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
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 登录
    submitForm() {
      login(this.ruleForm).then((res) => {
        console.log(res);
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
