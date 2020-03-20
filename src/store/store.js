import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        cartList:[]
    },
    mutations:{
        cart(state,payload){
            state.cartList.push(payload)
        },
        check(state,payload){
            state.cartList.find(payload)
        }
    },
    actions:{                    
        cartList(context,aa){
            return new Promise((resolve)=>{
                var a={aa,checked:true,number:1,price:150}
                context.commit('cart',a)
                resolve("添加成功")
            })
        }
    }
})
export default store