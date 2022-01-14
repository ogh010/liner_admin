import post from "../utils/axiosTemplate";

class ApiService {
  async cancel(reqData) {
    let res = await post("/be/v1/admin/order/worker/assign/cancel","line.be.v1.admin.order.worker.assign.cancel.req.json",reqData);
    return res;
  }
}

export default new ApiService();
