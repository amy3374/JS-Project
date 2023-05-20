import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null,
};

// function ProductReducer(state = initialState, action) {
//   let { type, payload } = action;
//   switch (type) {
//     case "GET_PRODUCT_SUCCESS":
//       return { ...state, productList: payload.data };
//     case "GET_PRODUCT_DETAIL":
//       return { ...state, selectedItem: payload.data };
//     default:
//       return { ...state };
//   }
// }
// export default ProductReducer;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getAllProduct(state, action) {
      state.productList = action.payload.data;
    },
    getDetailProduct(state, action) {
      state.selectedItem = action.payload.data;
    },
  },
});
export const productActions = productSlice.actions;
export default productSlice.reducer;
