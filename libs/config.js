export const BACKEND = () => {
    if (process.env.NODE_ENV === 'development') return 'https://strapi-mongo-duoc.herokuapp.com';
    // if (window.location.href.indexOf('stedu.vn') !== -1) return 'https://backend.stedu.vn:1237';
    return 'https://strapi-mongo-duoc.herokuapp.com';
  };

