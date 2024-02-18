// Stuff below is for local

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// Stuff below is for Github Pages

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    }
};

module.exports = nextConfig