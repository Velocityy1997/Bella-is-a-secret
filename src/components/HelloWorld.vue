<template>
<div>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="button" value="点击" @click="dianji">
    
  </div>

   <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column label="图片">
    <template slot-scope="scope">
      <div>
        <img :src="scope.row.img" alt="" width="100px" height="100px">
      </div>
    </template>

    </el-table-column>

    <el-table-column
      prop="ct"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="type"
      label="类型">
    </el-table-column>
  </el-table>

  <div class="block">
  <el-pagination
  @size-change="handleSizeChange"
  @current-change="handleCurrentChange"
  :current-page.sync="currentPage"
  :page-size="sizenum"
    layout=" total,prev, pager, next"
    :total="totalpage">
  </el-pagination>
</div>

</div>
</template>


 





<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Rs room',
      tableData: [],
      currentPage:1,
      sizenum:10,
      totalpage:1
    }
  },
  created(){
    this.dianji();
  },
  methods:{
    handleSizeChange(val){
      console.log(`每页${val}条`);
    },
    handleCurrentChange(val){
      console.log(`当前页:${val}`);
      this.currentPage=val;
      this.dianji();
    },
    dianji(){
    this.$http.get("http://route.showapi.com/109-35",{
      params:{
        showapi_appid:	106413,
        showapi_sign: "a711f8b9fead458ca2391aa2c07db89a",
        page:this.currentPage,
        maxResult:this.sizenum

      }}).then(res=>{
        
        console.log(res)
        this.totalpage=res.data.showapi_res_body.pagebean.allNum;
        this.tableData=res.data.showapi_res_body.pagebean.contentlist;
      })
  }
  }
  

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
