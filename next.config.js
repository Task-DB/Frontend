const nextConfig = {
  images: {
    domains: [
      "taskdb.s3.ap-northeast-2.amazonaws.com",
    ],
    imageSizes: [256, 256, 256, 256, 256, 256, 256, 384],
  },
  reactStrictMode: true,
  swcMinify: true,
  rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://192.168.10.103:8092/:path*",
      },
    ];
  },
};
