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
            var a={aa,checked:true}
            context.commit('cart',a)
        }
    }
})
export default store