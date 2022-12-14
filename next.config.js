const nextConfig = {
  images: {
    domains: ["taskdb-new.s3.ap-northeast-2.amazonaws.com"],
    imageSizes: [256, 256, 256, 256, 256, 256, 256, 384],
  },
  reactStrictMode: true,
  swcMinify: true,
  
};

module.exports = nextConfig;
