import post from "../utils/axiosTemplate";

export default async (reqData) => {
    let res = await post(
      "/be/v1/admin/order/completed",
      "line.be.v1.admin.order.completed.req.json",
      reqData
    );
    return res;
  }
