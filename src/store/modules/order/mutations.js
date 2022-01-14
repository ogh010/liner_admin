export default {
  SET_ORDER_LIST(state, orderList) {
    // 거래관리 주문리스트 조회
    state.orderList = orderList;
  },
  SET_TOGGLE_POPUP(state) {
    // 팝업 토글
    state.is_show = !state.is_show;
  },
  SET_ORDER_WORKER_LIST(state, orderWorkerList) {
    // 알바배정 리스트 조회
    state.orderWorkerList = orderWorkerList;
  },
  SET_ORDER_ID(state, orderId) {
    // 알바 배정시 필요한 orderId 저장
    state.orderId = orderId;
  },
  SET_ORDERLIST_ADD_WOKRERINFO(state, payload) {
    state.orderList[payload.index].workerInfo = payload.info;
    state.orderList[payload.index].state = 3;
    console.log(state.orderList[payload.index].workerInfo);
  },
  CHANGE_ORDER_STATE (state, payload) {
    console.log('CHANGE_ORDER_STATE')
    state.orderList[payload.index].state = payload.state;
  },
  SET_TOTAL_PAGE(state, totalPage) {
    state.totalPage = totalPage;
  },
  SET_PAGE(state, activePage) {
    state.activePage = activePage;
  },
  SET_REQ_DATA(state, reqData) {
    state.reqData = reqData;
  },
  SET_CUP_PAGE(state, curPage) {
    state.reqData.curPage = curPage // requets page 변경
  },
};
