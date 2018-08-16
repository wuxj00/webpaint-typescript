<template>
  <div class="course">
    <div class="course-search">
      <el-form ref="form"
               style="padding-top: 50px"
               :model="searchForm"
               :inline="true"
               label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name"></el-input>
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="searchForm.sid"></el-input>
        </el-form-item>
        <el-form-item label="电话号码">
          <el-input v-model="searchForm.phone"></el-input>
        </el-form-item>
        <el-form-item style="float:right;margin-right: 100px">
          <el-button type="primary">查询</el-button>
          <el-button >重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="course-result">
      <div class="course-result-total"></div>
      <div class="course-result-list">

      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { GraphView } from '@/GraphView';


  @Component({
    components: {
    },
  })
  export default class CourseInfo extends Vue {
    private condition: any;
  }
</script>

<style lang='scss' scoped>
.course{
  width: 100%;
  height: 100%;
  background-color: #eaf5f5;
  &-search{
    height: 160px;
    background-color: #fff;
    width: 100%;
    text-align: left;
    margin: 50px 0;
    border-radius: 6px;
  }
  &-result{
    width: 100%;
    background-color: #fff;
    min-height: 100px;
    border-radius: 6px;
  }
}
</style>
