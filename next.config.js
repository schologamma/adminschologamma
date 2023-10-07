/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'drive.google.com' ,
           
           
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com' ,
           
           
          },
        ],
      }
        // images: {
        //   domains: ['res.cloudinary.com' ,'drive.google.com'],
        // },
      // },
}

module.exports = nextConfig
