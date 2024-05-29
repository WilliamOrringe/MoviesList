/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: 'image.tmdb.org' },
            { hostname: 'lh3.googleusercontent.com' },
        ],
    },
}

module.exports = nextConfig
