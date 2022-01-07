import post from "../utils/axiosTemplate";

class ApiService {
  async auth(reqData) {
    let res = await post(
      "/be/v1/admin/worker/auth",
      "line.be.v1.admin.worker.auth.req.json",
      reqData
    );
    return res;
  }
}

export default new ApiService();
