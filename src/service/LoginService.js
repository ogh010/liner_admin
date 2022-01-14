import post from "../utils/axiosTemplate";

export default async (reqData) => {
    let res = await post(
      "/be/v1/admin/login",
      "line.be.v1.admin.login.req.json",
      reqData
    );
    return res;
  }
