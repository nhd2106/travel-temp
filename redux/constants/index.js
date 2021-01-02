export const APP = {
    handlers: {
        navigations: 'APP_GET_NAVIGATIONS',
    },
    update: 'APP_UPDATE',
    details: 'COURSE_DETAILS',
    byCategory: 'COURSE_BYCATEGORY',
}
export const COURSE = {
    handlers: {
        get: 'COURSE_GET_HANDLER',
        getDetails: 'COURSE_GETDETAILS_HANDLER',
        getByCate: 'COURSE_GETBYCATE_HANDLER',
    },
    update: 'COURSE_UPDATE',
    details: 'COURSE_DETAILS',
    byCategory: 'COURSE_BYCATEGORY',
}
export const USER = {
    handlers: {
        get: 'USER_GET_HANDLER',
        getByName: 'USER_GETBYNAME_HANDLER'
    },
    update: 'USER_UPDATE',
    userByName: 'USER_BYNAME',
    signin: 'SIGN_IN',
    signOut: 'SIGN_OUT'
    
}
export const BLOG = {
    handlers: {
        get: 'BLOG_GET_HANDLER',
        getDetails: 'BLOG_GETDETAILS_HANDLER'
    },
    update: 'BLOG_UPDATE',
    userByName: 'BLOG_BYNAME',
    
}
export const PRODUCT = {
    handlers: {
        get: 'PRODUCT_GET_HANDLER',
        getDetails: 'PRODUCT_GETDETAILS_HANDLER'
    },
    update: 'PRODUCT_UPDATE',
    
}

export const CATEGORIES = {
    handlers: {
        get: 'CATEGORIES_GET_HANDLER',
    },
    update: 'CATEGORIES_UPDATE',
}
export const actionTypes = {
    FAILURE: 'FAILURE',
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
    LOAD_DATA: 'LOAD_DATA',
    LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
    START_CLOCK: 'START_CLOCK',
    TICK_CLOCK: 'TICK_CLOCK',
    HYDRATE: 'HYDRATE',
  }