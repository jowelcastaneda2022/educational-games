export const addSearchPlayer = (playerName: string) => {
  return (
    dispatch: (arg0: { type: string; payload: string }) => void
  ) => {
    dispatch({
      type: "SEARCH_PLAYER",
      payload: playerName,
    });
  };
};

export const clearSearch = () => {
  return (
    dispatch: (arg0: { type: string; }) => void
  ) => {
    dispatch({
      type: "CLEAR_SEARCH",
    });
  };
};

