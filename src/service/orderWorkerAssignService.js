import post from "../utils/axiosTemplate";

class ApiService {
  async assign(reqData) {
    let res = await post(
      "/be/v1/admin/order/worker/assign",
      "line.be.v1.admin.order.worker.assign.req.json",
      reqData
    );
    return res;
  }
}

export default new ApiService();
