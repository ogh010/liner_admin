import post from '../utils/axiosTemplate'

class ApiService{
    async list(reqData) {
        let res = await post(
            "/be/v1/admin/order/list", "line.be.v1.admin.order.list.req.json", reqData
        );
        return res
    }
}

export default new ApiService()