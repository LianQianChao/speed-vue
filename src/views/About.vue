<template>
  <div class="about">
    <base-table :columns="columns" :dataSource="dataSource"> </base-table>
  </div>
</template>
<script lang='ts'>
import { computed, defineComponent, onMounted } from "vue";
import BaseTable from "@/components/Base/BaseTable.vue";
import {useStore} from 'vuex'
import {GlobalDataProps} from '../store/index'

interface Columns {
  id: number;
  name: string;
  dataIndex: string;
}

export default defineComponent({
  name: "About",
  components: {
    BaseTable,
  },
  setup() {

    const store = useStore<GlobalDataProps>();

    let cols: Array<Columns> = [
      {
        id: 1,
        name: "ID",
        dataIndex: "id",
      },
      { id: 2, name: "消息", dataIndex: "message" },
    ];

    onMounted(()=>{
      store.dispatch("getAllLogs")
    })

    const datas = computed(()=> store.state.dataSource)
    return {
      columns: cols,
      dataSource: datas
    };
  },
});
</script>
