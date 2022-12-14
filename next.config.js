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
        source: "/get", //api request path
        destination: "https://random-d.uk/api/random", //목적 path
      },
    ];
  },
};
