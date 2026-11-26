import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // The Design tab used to live at /projects; keep old links working.
  redirects: async () => [{ source: "/projects", destination: "/design", permanent: true }],
};

export default nextConfig;
