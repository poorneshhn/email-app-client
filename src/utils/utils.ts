export const isEmpty = (ele: any): boolean => {
  if (Array.isArray(ele) || typeof ele === "string") {
    return ele.length === 0;
  }

  return !ele;
};

export const isEmptyJSON = (ele: any): boolean => {
  if (ele) {
    return Object.keys(ele).length === 0;
  }

  return !ele;
};

export const generateUniqueId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

export const checkStatusCode = (res: any, status: number) => {
  return res.status === status;
};
