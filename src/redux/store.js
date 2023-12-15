import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartRuducer";
import { orderReducer } from "./reducers/orderReducer";
import { ordersReducer } from "./reducers/orderReducer";
import { adminReducer } from "./reducers/adminReducer";
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    order: orderReducer,
    orders: ordersReducer,
    admin: adminReducer,
  },
});

export default store;

export const server = "https://engineer-burder-wala-server.onrender.com/api/v1";
