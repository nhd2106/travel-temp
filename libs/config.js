export const BACKEND = () => {
    if (process.env.NODE_ENV === 'development') return 'https://157.230.46.108';
    // if (window.location.href.indexOf('stedu.vn') !== -1) return 'https://backend.stedu.vn:1237';
    return 'https://157.230.46.108';
  };

