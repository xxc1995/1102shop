<template>
  <el-container class="home_container">
    <el-header>
      <div class="left">
        <img src="../assets/heima.png" />
        <h3>电商管理后台</h3>
      </div>
      <el-button type="primary" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单区-->
        <el-menu background-color="#333744" text-color="#fff" active-text-color="#409eff">
          <!-- 一级菜单 -->
          <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
            <!-- 一级菜单模板区 -->

            <template slot="title">
              <!-- 图标 -->
              <i :class="iconObj[item.id]"></i>
              <!-- 文本 -->
              <span>{{item.authName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="subItem.id+''" v-for="subItem in item.children" :key="subItem.id">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <!-- 文本 -->
                <span>{{subItem.authName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主题内容 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  name: "home",
  created() {
    this.getMenulist();
  },
  data() {
    return {
      //左侧菜单栏数据
      menulist: [],
      iconObj: {
        "125": "iconfont icon-user",
        "103": "iconfont icon-tijikongjian",
        "101": "iconfont icon-shangpin",
        "102": "iconfont icon-danju",
        "145": "iconfont icon-baobiao"
      }
    };
  },
  methods: {
    logout: function() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    //获取所有菜单
    async getMenulist() {
      const { data: res } = await this.$http.get("menus");
      /* console.log(res) */
      if (res.meta.status != 200) return this.$message.error(res.meta.msg);
      this.menulist = res.data;
      /* console.log(this.list); */
    }
  }
};
</script>
<style scoped lang="less">
.home_container {
  height: 100%;
  .el-aside {
    background: #333744;
  }
  .el-header {
    background: #373d41;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
    .left {
      display: flex;
      align-items: center;
      color: #fff;
      font-size: 20px;
      img {
        margin-right: 10px;
      }
      h3 {
        font-weight: normal;
      }
    }
  }
  .el-main {
    background: #eaedf1;
  }
  .iconfont {
    margin-right:10px;
  }
}
</style>