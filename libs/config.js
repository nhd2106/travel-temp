export const BACKEND = () => {
    if (process.env.NODE_ENV === 'development') return 'http://143.198.194.128:1337';
    // if (window.location.href.indexOf('stedu.vn') !== -1) return 'https://backend.stedu.vn:1237';
    return 'http://143.198.194.128:1337';
  };

