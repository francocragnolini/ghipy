import React, { useState } from "react";

// We receive as parameters the name and the initial state of our item.
function useLocalStorage(itemName, initialValue) {
  // We store our item in a constant.
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  //parsed-item = initialValue or parsed-item = localStorageItem
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  // Actualizamos la función para guardar nuestro item con las nuevas variables y parámetros
  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  // Regresamos los datos que necesitamos
  return [item, saveItem];
}
