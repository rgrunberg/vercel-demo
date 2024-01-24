export const evaluate = (flagName) => {
  // If this were a real app, we'd fetch this data from a remote service
  // Instead just return true or false at random
  const array = [true, false];
  return array[Math.floor(Math.random() * array.length)];
};
