export default {
    SET_ORDER_LIST(state, orderList) {
        // 거래관리 주문리스트 조회
        state.orderList = orderList;
    },
    SET_TOGGLE_POPUP(state) {
        state.is_show =! state.is_show
    }
};
