module.exports = {
  env: {
    JWT_SECRET: process.env.JWT_SECRET,
    MONGODB_URI: process.env.MONGODB_URI,
  },
  images: {
    domains: ['books.google.com'],
  },
};

