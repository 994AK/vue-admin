<template>
  <!--  <div class="">角色列表</div>-->
  <div class="role-list">
    <div class="role_list_form">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="商户号">
          <el-input placeholder="商户号"></el-input>
        </el-form-item>
        <el-form-item label="活动ID">
          <el-input placeholder="活动ID"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>

        <el-form-item>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table
      :data="tableData"
      max-height="500"
      :header-cell-style="{ background: '#FAFAFA', fontSize: '14px' }"
    >
      <el-table-column prop="MHT_NO" label="商户号" width="250" />
      <el-table-column
        prop="YUSHOUQUANMA_M"
        label="活动预算授权码"
        width="170"
      />
      <el-table-column prop="TERMID" label="终端号" width="170" />
      <el-table-column prop="THRESHOLD" label="贴边门槛（元）" width="170" />
      <el-table-column
        prop="FRQNCY_LMT_MTHLY"
        label="每月限定参与次数上限"
        width="200"
      />
      <el-table-column
        prop="YUSHOUQUANMA_I"
        label="活动配置预授权码"
        width="200"
      />
      <el-table-column prop="ACTVTYID" label="活动ID" width="170" />
      <el-table-column prop="STOCK_ID" label="批次ID" width="170" />
    </el-table>
  </div>
</template>

<script setup>
const tableData = []

for (let i = 0; i < 50; i++) {
  tableData.push({
    MHT_NO: '10445019222199909',
    YUSHOUQUANMA_M: '123123',
    TERMID: '4521231',
    THRESHOLD: '5',
    FRQNCY_LMT_MTHLY: '10',
    YUSHOUQUANMA_I: '44421',
    ACTVTYID: '1111',
    STOCK_ID: '2222'
  })
}
</script>

<style lang="scss" scoped>
.role-list {
  display: flex;
  flex-direction: column;
  width: 94%;

  .el-table {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    ::v-deep th {
      padding-top: 10px;
      color: rgb(31, 34, 37);
    }
  }
}
</style>
