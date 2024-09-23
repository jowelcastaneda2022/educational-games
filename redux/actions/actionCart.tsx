export const addToCart = (product: object) => {
  return (
    dispatch: (arg0: { type: string; payload: { quantitySelected: number } }) => void
  ) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantitySelected: 0 },
    });
  };
};

export const updateCart = (newProductList: Array<any>) => {
  return (dispatch: (arg0: { type: string; payload: any[] }) => void) => {
    dispatch({
      type: "UPDATE_CART",
      payload: newProductList,
    });
  };
};

export const deleteProductCart = (id: Array<any>) => {
  return (dispatch: (arg0: { type: string; payload: any[] }) => void) => {
    dispatch({
      type: "DELETE_PRODUCT_CART",
      payload: id,
    });
  };
};

export const clearCart = () => {
  return (dispatch: (arg0: { type: string; payload: any[] }) => void) => {
    dispatch({
      type: "CLEAR_CART",
      payload: null,
    });
  };
};