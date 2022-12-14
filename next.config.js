module.exports = {
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://192.168.10.103:8092/:path*",
      },
    ];
  },
};
