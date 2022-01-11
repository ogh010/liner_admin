export default {
  SET_WORKER_LIST(state, workerList) {
    // 알바리스트 조회
    state.workerList = workerList;
  },
  SET_TOGGLE_POPUP(state) {
    state.is_show = !state.is_show;
  },
  SET_WORKER_ID(state, workerId) {
    // 알바 인증시 필요한 workerId 저장
    state.workerId = workerId;
  },
  SET_WORKER_AUTH_FLAG(state, index) {
    state.workerList[index].authFlag = 1;
  },
  SET_TOTAL_PAGE(state, totalPage) {
    state.totalPage = totalPage
  },
  SET_REQ_DATA(state, reqData) {
    state.reqData = reqData
  },
  SET_CUP_PAGE(state, curPage) {
    state.reqData.curPage = curPage
    state.page = curPage
  }
};
