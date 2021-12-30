import React from "react";

const useLocalStorage = (itemName, initialValue) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [sincronizedItem, setSincronizedItem] = React.useState(true)

  const [item, setItem] = React.useState(initialValue);

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
  
        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true);
      }, 1000);
    } catch(error) {
      setError(error)
    }
  }, [sincronizedItem]);

  const saveItem = (newTodos) => {
    try {
      setItem(newTodos);
      const stringifiedTodos = JSON.stringify(newTodos)
      localStorage.setItem(itemName, stringifiedTodos)
    } catch(error) {
      setError(error)
    }
  };
  const sincronize = () => {
    setLoading(true);
    setSincronizedItem(false);
  }
  return {
    item,
    saveItem,
    loading,
    error,
    sincronize,
  };
}
export { useLocalStorage }