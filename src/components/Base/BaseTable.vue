<template>
  <div class="table">
      <table border="1px" cellspacing="0"
    cellpadding="10">
          <tr>
              <th v-for="col in columns" :key="col.id">
                  {{col.name}}
              </th>
              <th v-if="actions">
                  操作
              </th>
          </tr>
          <tr  v-for="data in dataSource" :key="data.id">
              <td  v-for="col in columns" :key="col.id"> 
                  <template v-for="(value,name,index) in data" :key="index">
                      {{col.dataIndex == name ? value : null}}
                  </template>
              </td>

              <td v-if="actions">
                  <slot name="delete"></slot>
                  <slot name="insert"></slot>
              </td>
          </tr>
      </table>
  </div>
</template>

<script lang="ts">
export default {
    name:"BaseTable",
    props:{
        columns:{
            type:Array,
            required:true
        },
        dataSource:{
            type:Array,
            required:true
        },
        actions:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style>
    .table table{
        width: 600px;
    }
</style>>