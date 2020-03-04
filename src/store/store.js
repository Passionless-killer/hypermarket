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
        }
    },
    actions:{                    
        cartList(context,aa){
            context.commit('cart',aa)
            window.console.log("--")
        }
    }
})
export default store