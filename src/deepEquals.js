/**
 * Deeply compares two objects or literals. Returns true if both objects or literals are completely similar in structure and value.
 *
 * @param {*} obj1 The first object or literal
 * @param {*} obj2 The second object or literal
 * @returns boolean
 */
const deepEquals = (obj1, obj2) => {
  if (typeof obj1 !== typeof obj2) return false;
  if (typeof obj1 !== "object") return obj1 === obj2;
  if (typeof obj1 === null && typeof obj2 === null) return true;
  for (let k in obj1) {
    const isEqual = deepEquals(obj1[k], obj2[k]);
    if (!isEqual) return false;
  };
  return true;
};