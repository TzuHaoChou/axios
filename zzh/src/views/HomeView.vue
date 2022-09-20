
<template>
  <div>
    
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
</style>

