import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer(
  { users: [], orders: [] },
  {
    getAdminStatsRequest: (state) => {
      state.loading = true;
    },
    getAdminStatsSuccess: (state, action) => {
      state.loading = false;
      state.shipped = action.payload.shipped;
      state.delivered = action.payload.delivered;

      state.prepairing = action.payload.prepairing;
      state.usersCount = action.payload.usersCount;
      state.ordersCount = [action.payload.ordersCount];
      state.totalIncome = action.payload.totalIncome;
    },
    getAdminStatsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //users
    getAdminUsersRequest: (state) => {
      state.loading = true;
    },
    getAdminUsersSuccess: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    getAdminUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //orders
    getAdminOrdersRequest: (state) => {
      state.loading = true;
    },
    getAdminOrdersSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    getAdminOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //processing orders
    processOrderRequest: (state) => {
      state.loading = true;
    },
    processOrderSuccess: (state, action) => {
      state.loading = false;
      state.message = action.payload;
    },
    processOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  }
);
