
import axios from 'axios'
axios({
    url:'http://27.2.7.32.32:8000/home/multidata'
}).then(res=>{
  window.console.log(res)
})
export default  axios