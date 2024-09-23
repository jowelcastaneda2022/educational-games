const initialState = [];

const cartReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let updatedProductList = [];

      const checkIfProductExist = () => {
        var productExist = false;

        state.forEach((product: any) => {
          if (product.productName === action.payload.productName) {
            productExist = true;
          }
        });

        return productExist;
      };

      if (checkIfProductExist()) {
        state.forEach((product: any) => {
          if (product.productName === action.payload.productName) {
            updatedProductList.push({
              ...product,
              quantitySelected: product.quantity == product.quantitySelected ? product.quantity : product.quantitySelected + 1,
            });
          } else {
            updatedProductList.push(product);
          }
        });

        return updatedProductList;
      } else {
        return [{ ...action.payload, quantitySelected: 1 }, ...state];
      }

    case "UPDATE_CART":
      return action.payload;

    case "DELETE_PRODUCT_CART":
      return [...state].filter(
        (product) => product.id !== action.payload
      );

    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};

export default cartReducer;
