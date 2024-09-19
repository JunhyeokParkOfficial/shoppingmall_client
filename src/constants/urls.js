const host = process.env.REACT_APP_SERVER_HOST;

export const PAGE_URL = {
    ADMIN:"/admin",
    ADMIN_MANAGE:"/admin/product/:id",
    PRODUCT_REG:"/admin/product/register",
    ORDER_MANAGE: "/admin/order/:id",
    PRODUCT_EDIT:"/admin/product/edit/:id",
    HOME:"/",
    RESET:"/reset",
    PRODUCT:"/product",
    LOGIN:"/login",
    REGISTER:"/register",
    MYPAGE:"/mypage",
    INFO:"/mypage/information",
    MY_ORDER:"/mypage/order/:id",
    CART:"/cart/:id",
    CART_PAGE: (id) => `/cart/${id}`,
    PRODUCT_DETAIL:"/product/:id",
  };
  
  export const API_URL = {  
    REGISTER: host+"/api/member",
    LOGIN: host+"/api/auth",
    LOGOUT: host+"/api/auth",
    MY_INFO: host+"/api/member",
    REISSUE: host+"/api/auth/token"
  };
  