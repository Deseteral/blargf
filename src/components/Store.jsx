import React from 'react';

const Store = React.createContext();

const initialState = {
  snackbar: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'MAKE_SNACKBAR':
      return { ...state, snackbar: action.payload };
    case 'CLEAR_SNACKBAR':
      return { ...state, snackbar: null };
    default:
      return state;
  }
}

function StoreProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const makeSnackbar = (text, clearTimeoutMs, actionText, action) => {
    if (state.snackbar) clearTimeout(state.snackbar.timeoutId);
    const timeoutId = setTimeout(() => dispatch({ type: 'CLEAR_SNACKBAR' }), clearTimeoutMs);

    dispatch({
      type: 'MAKE_SNACKBAR',
      payload: {
        text,
        actionText,
        action: () => {
          clearTimeout(timeoutId);
          action();
          dispatch({ type: 'CLEAR_SNACKBAR' });
        },
        timeoutId,
      },
    });
  };

  const value = { state, dispatch, makeSnackbar };

  return (
    <Store.Provider value={value}>
      {children}
    </Store.Provider>
  );
}

export {
  Store,
  StoreProvider,
};
