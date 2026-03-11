const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.stampli.com" },
      { protocol: "https", hostname: "www.techmonitor.ai" },
      { protocol: "https", hostname: "static.ra.co" },
      { protocol: "https", hostname: "www.topcit.or.kr" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },
};

export default nextConfig;
