module.exports = {
  publicPath: "/line/ad",
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/be": {
        //프록시요청을 보낼 주소.
        target: "http://localhost:25123", //test 서버
        changeOrigin: true,
        ws: false,
      },
    },
  },
};
