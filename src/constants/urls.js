const host = process.env.REACT_APP_SERVER_HOST;

export const PAGE_URL = {
    ADMIN:"/admin",
    ADMIN_PRODUCT_MANAGE:"/admin/product",
    MYPAGE_PRODUCT:"/mypage/product",
    ORDER_MANAGE: "/admin/order",
    PRODUCT_EDIT:"/admin/product/edit/:id",
    HOME:"/",
    RESET:"/reset",
    PRODUCT:"/product",
    LOGIN:"/login",
    LOGIN_ADMIN:"/admin/login",
    REGISTER:"/register",
    MYPAGE:"/mypage",
    INFO:"/mypage/information",
    MY_ORDER:"/mypage/order/:id",
    CART:"/cart",
    PRODUCT_REG: "/mypage/product/register",
    PRODUCT_DETAIL:"/product/:id",
    PRODUCT_DETAIL_ID: (id) => `/product/${id}`
  };
  
  export const API_URL = {  
    REGISTER: host+"/api/auth",
    LOGIN: host+"/api/auth",
    LOGIN_ADMIN: host+"/api/auth/admin",
    LOGOUT: host+"/api/auth",
    MY_INFO: host+"/api/member",
    REISSUE: host+"/api/auth/token",
    PRODUCTS: host+"/api/product",
    IMAGE: host+"/api/image",
    PRODUCT_REG: host+"/api/product",
    PRODUCT_DETAIL: (id) => host + `/api/product/${id}`,
    ADD_TO_CART: host+"/api/cart",
    CART_ITEMS: host+"/api/cart",
    MY_PRODUCTS: host+"/api/product/my"
  };
  