import { createStore } from 'vuex'
import axios from 'axios'


interface Columns{
  id:number;
  name:string;
  dataIndex:string;
}

interface DataSource{
  id:number;
  message:string;
}

export interface GlobalDataProps{
  columns: Columns[],
  dataSource: DataSource[],
  message: ''
}

export default createStore<GlobalDataProps>({
  state: {
    columns:[],
    dataSource:[],
    message:''
  },
  mutations: {
    getAllLogs(state,datas){
      state.dataSource = datas.data; 
    }
  },
  actions: {
    getAllLogs(context){
      axios.get(`api/system/logs`).then(reps=>{
        context.commit("getAllLogs",reps.data)
      })
    }
  },
  modules: {
  }
})
