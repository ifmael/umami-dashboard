module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '36c7a7ba3c7b5896413127d7602e2176'),
  },
});
