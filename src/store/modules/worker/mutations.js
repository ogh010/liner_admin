export default {
  SET_WORKER_LIST(state, workerList) {
    // 알바리스트 조회
    state.workerList = workerList;
  },
  SET_TOGGLE_POPUP(state) {
    state.is_show = !state.is_show;
  },
  SET_WORKER_ID(state, workerId) {
    state.workerId = workerId; // 알바 인증시 필요한 workerId 저장
  },
  SET_WORKER_AUTH_FLAG(state, index) {
    state.workerList[index].authFlag = 1; // 인증성공 상태로 변경
  },
  SET_TOTAL_PAGE(state, totalPage) {
    state.totalPage = totalPage // 총페이지 개수 저장
  },
  SET_REQ_DATA(state, reqData) {
    state.reqData = reqData // reqdate 저장
  },
  SET_CUP_PAGE(state, curPage) {
    state.reqData.curPage = curPage // requets page 변경
  },
  SET_PAGE(state, activePage) {
    state.activePage = activePage // active page 변경
  }
};
