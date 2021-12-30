import React from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false)

  React.useEffect(() => {
    const onChange = (change) => {
      if (change.key === 'todoMachineTODOS_V1') {
        console.log('hubo cambios');
        setStorageChange(true);
      }
    }
    window.addEventListener('storage', onChange);
    return () => {
      window.removeEventListener('storage', onChange)
    }
  }, [])

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  }

  return {
    show: storageChange,
    toggleShow,
  };
}

export { useStorageListener }