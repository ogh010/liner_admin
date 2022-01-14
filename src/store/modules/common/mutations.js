export default {
  CHANGE_IS_SHOW(state, flag) {
    state.is_show = flag
  },
  SHOW_POP_UP(state, type) {
    state.is_show = true
    state.type = type
  },
  SET_OBJ(state, payload) {
    state.obj = payload
    console.log(state.obj);
  },
};
