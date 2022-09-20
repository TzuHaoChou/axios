
<template>
  <div>
    <el-container>
      <el-header>
        <div class="top">
          <span
            ><img src="http://vue.mengxuegu.com/img/logo.7156be27.png" alt="" />
            <p>梦学谷会员管理</p></span
          >
          <span class="aa"
            ><p>邱秀英</p>
            <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              ><div>
                <p>修改密码</p>
                <p @click="$router.push('/login')">退出登录</p>
              </div>
              <i class="el-icon-arrow-down" slot="reference"></i>
            </el-popover>
          </span>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
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
    };
  },
  created() {
    login(this.form).then((res) => {
      console.log(res);
    });
  },
  mounted() {},
  methods: {},
};
</script>
<style scoped lang='scss'>
.el-header,
.el-footer {
  background-color: #2d3a4b;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
.top {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
p {
  font-size: 28px;
}
span {
  margin: 0 30px;
  display: flex;
  align-items: center;
  color: #fff;
  i {
    font-size: 28px;
  }
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
}
</style>

