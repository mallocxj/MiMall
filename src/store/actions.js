export default {
    saveUsername(context,username){
        context.commit('saveUsername',username);
    },
    savecartCount(context,cartCount){
        context.commit('savecartCount',cartCount);
    }
}