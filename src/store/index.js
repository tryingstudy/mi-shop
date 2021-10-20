/*
存放一些商城主界面的数据
 */
const index = {
  state: {
    phone: [],
  },
  mutations: {
    phoneData(state,data){
      state.phone = data,
      window.sessionStorage.setItem('phone',state.phone)

    }
  },
  actions: {

  },
  getters: {
    phone: state => {
      let phone = state.phone
      if (!phone) {
        phone = window.localStorage.getItem('phone')
      }
      return phone
    },
  },
}
export default index
