/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abmvtscjltfxsbkhpqhg.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins-image/**",
        search: "",
      },
    ],
  },
};

// https://abmvtscjltfxsbkhpqhg.supabase.co/storage/v1/object/public/cabins-image//0.4269124128749069-cabin-003.jpg
export default nextConfig;
