/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        REACT_APP_API_KEY: "rINmkoMvUAKT9Mgzcv7PfqT2OITStCEmYIBHKorjHdc",
        REACT_APP_API_URI: "https://api.unsplash.com/",
    },
};

module.exports = nextConfig
