/*
 * Implement setInterval using setTimeout in javascript
 */

const customSetInterval = (callback, interval) => {
  return setTimeout(() => {
    if (typeof callback === "function") {
      callback();
      customSetInterval(callback, interval);
    } else {
      console.error(new Error("Expecting a function as an argument."));
    }
  }, interval);
};

const clearCustomSetInterval = id => {
  clearTimeout(id);
};
