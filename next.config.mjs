// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
  };
  
  export default nextConfig;