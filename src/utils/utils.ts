export const isEmpty = (ele: any): boolean => {
  if (Array.isArray(ele) || typeof ele === "string") {
    return ele.length === 0;
  }

  return ele === undefined;
};

export const isEmptyJSON = (ele: any): boolean => {
  if (ele) {
    return Object.keys(ele).length === 0;
  }

  return !ele;
};
