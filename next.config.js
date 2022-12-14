module.exports = {
  images: {
    domains: [
      "localhost",
      "s3.ap-northeast-2.amazonaws.com",
      "avatars.githubusercontent.com",
      "taskdb.s3.ap-northeast-2.amazonaws.com",
    ],
    imageSizes: [256, 256, 256, 256, 256, 256, 256, 384],
  },
  rewrites() {
    return [
      {
        source: "/:path*", //api request path
        destination: "http://192.168.10.103:8092/:path*", //목적 path
      },
    ];
  },
};
