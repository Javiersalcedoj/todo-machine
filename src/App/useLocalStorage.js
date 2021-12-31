import React from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [state, dispatch] = React.useReducer(reducer, initialState({ initialValue }));

  const {
    error,
    loading,
    sincronizedItem,
    item,
  }= state;

  //ACTION CREATORS
  const onError = (error) => dispatch({
    type: actionTypes.error,
    payload: error,
  });
  const onSuccess = (item) => dispatch({
    type: actionTypes.success,
    payload: item,
  });
  const onSave = (item) => dispatch({
    type: actionTypes.save,
    payload: item,
  });
  const onSincronized = () => dispatch({
    type: actionTypes.sicronized,
  });
  
  React.useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
        
        onSuccess(parsedItem);
      }, 1000);
    } catch(error) {
      onError(error)
    }
  }, [sincronizedItem]);

  const saveItem = (newTodos) => {
    try {
      // setItem(newTodos);
      const stringifiedTodos = JSON.stringify(newTodos)
      localStorage.setItem(itemName, stringifiedTodos)
      onSave(newTodos);
    } catch(error) {
      onError(error)
    }
  };
  const sincronize = () => {
    onSincronized();
  }
  return {
    item,
    saveItem,
    loading,
    error,
    sincronize,
  };
}

const initialState = ({ initialValue }) => ({
  error: false,
  loading: true,
  sincronizedItem: true,
  item: initialValue,
});

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  save: 'SAVE',
  sicronized: 'SINCRONIZED',
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    item: payload,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
  [actionTypes.sicronized]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};
export { useLocalStorage }